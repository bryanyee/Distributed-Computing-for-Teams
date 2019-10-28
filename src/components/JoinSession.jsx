import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Pending from './Pending';
import Performance from './Performance';
import Participate from './Participate';
import WorkerProcess from './WorkerProcess';
import Success from './Success';
import Host from './Host';

import { initSocket, disconnectSocket } from '../Socket';
import { startWorkers, terminateAllWorkers } from '../workerController';

let socket;

function initSessionState() {
	return {
		begin: undefined,
		calculating: false,
		charset: undefined,
		clearText: undefined,
		duration: undefined,
		end: undefined,
		globalConnections: undefined,
		globalNumCombos: undefined,
		globalWorkers: undefined,
		hash: undefined,
		hasMaster: false,
		isMaster: false,
		length: undefined,
		noTasksAvailable: false,
		optimalWorkers: undefined,
		ready: false,
		startTime: undefined,
		userParticipation: false,
		workers: undefined,
	};
}

class JoinSession extends Component {
	constructor() {
		super();
		this.state = initSessionState();

		this.resetState = this.resetState.bind(this);
		this.startSocketConnection = this.startSocketConnection.bind(this);
		this.claimMaster = this.claimMaster.bind(this);
		this.updateSettings = this.updateSettings.bind(this);
		this.chooseWorkerCount = this.chooseWorkerCount.bind(this);
		this.startMD5Decrypt = this.startMD5Decrypt.bind(this);
		this.startWork = this.startWork.bind(this);
		this.requestMoreWork = this.requestMoreWork.bind(this);
		this.passwordCracked = this.passwordCracked.bind(this);

	}

	componentWillUnmount() {
		terminateAllWorkers();
		disconnectSocket();
	}

	resetState() {
		this.setState(initSessionState());
	}

	startSocketConnection() {
		socket = initSocket(io);

		// Handlers for custom socket events
		socket.on('client-connected-response', (data) => {
			this.setState({ hasMaster: data.hasMaster, userParticipation: true });
		});

		socket.on('claim-master-response', (data) => {
			this.setState({ globalConnections: data.globalConnections });
		});

		socket.on('master-claimed', (data) => {
			this.setState({ globalConnections: data.globalConnections, hasMaster: true });
		});

		socket.on('new-client-ready', (data) => {
			this.setState({ globalConnections: data.globalConnections, globalWorkers: data.globalWorkers });
		});

		socket.on('start-work', this.startWork);

		socket.on('no-available-tasks', (data) => {
			this.setState({ ...data, calculating: true, noTasksAvailable: true });
		});

		socket.on('password-found', (data) => {
			console.log('password-found', data);
			socket.disconnect();
			terminateAllWorkers();
			this.setState({ clearText: data.clearText, duration: data.duration });
		});

		socket.on('master-disconnected', () => {
			socket.disconnect();
			terminateAllWorkers();
			this.props.history.push('MasterDisconnect');
		});

		socket.on('client-disconnect', (data) => {
			this.setState({ globalConnections: data.globalConnections, globalWorkers: data.globalWorkers });
		});

		// Handlers for connection events
		socket.on('connect_error', (_e) => {
			console.log('connection error', socket.id);
		});

		socket.on('reconnect', () => {
			console.log('socket reconnected', socket.id);
		})

		socket.on('reconnect_error', (_e) => {
			console.log('reconnect connection error', socket.id);
		})


		const optimalWorkers = (navigator.hardwareConcurrency / 2) + 1;
		this.setState({ optimalWorkers });
	} // End of startSocketConnection()

	claimMaster() {
		socket.emit('claim-master');
		this.setState({ hasMaster: true, isMaster: true, ready: true });
	}

	updateSettings(name, e) {
		const stateUpdate = {};
		if (name === 'workers' || name === 'length') stateUpdate[name] = Number(e.target.value);
		else stateUpdate[name] = e.target.value;
		this.setState(stateUpdate);
	}

	chooseWorkerCount() {
		socket.emit('client-ready', { ready: true, workers: this.state.workers });
		this.setState({ ready: true });
	}

	startMD5Decrypt() {
		if (!this.state.hash || this.state.hash.length !== 32) {
			alert('Please enter a valid hash');
		} else if (!this.state.length) {
			alert('Please enter a valid length');
		} else if (!this.state.workers) {
			alert('Please enter a valid number of Web Workers');
		} else {
			console.log('start decryption hash', this.state.hash);
			socket.emit('start-decryption', { hash: this.state.hash, length: this.state.length, workers: this.state.workers });
		}
	}

	startWork(data) {
		const newState = {
			begin: data.begin,
			calculating: true,
			end: data.end,
			globalConnections: data.globalConnections,
			globalNumCombos: data.globalNumCombos,
			globalWorkers: data.globalWorkers,
			hash: data.hash,
			length: data.length,
			startTime: data.startTime,
		};

		startWorkers(this.passwordCracked, data.begin, data.end, this.state.workers, data.hash, data.length, data.startTime, this.requestMoreWork, socket);
		this.setState(newState);
	}

	requestMoreWork(socket) {
		socket.emit('request-more-work');
	}

	passwordCracked(clearText, duration) {
		const data = { clearText, duration };
		socket.emit('password-cracked', data);
		this.setState(data);
	}

	selectChar(e) {
		this.setState({ charset: e.target.value });
	}

	render() {
		const sessionView = !this.state.userParticipation ? <Participate startSocketConnection={this.startSocketConnection} />
			: !this.state.hasMaster ? <Host claimMaster={this.claimMaster} ready={this.state.ready} resetState={this.resetState}/>
				: this.state.clearText ? <Success {...this.state} />
					: this.state.isMaster && !this.state.calculating ? <Performance {...this.state} updateSettings={this.updateSettings} startMD5Decrypt={this.startMD5Decrypt} selectChar={this.selectChar} />
						: this.state.isMaster && this.state.calculating ? <WorkerProcess {...this.state} />
							: this.state.calculating && this.state.ready ? <WorkerProcess {...this.state} />
								: <Pending ready={this.state.ready} optimalWorkers={this.state.optimalWorkers} workers={this.state.workers} updateSettings={this.updateSettings} chooseWorkerCount={this.chooseWorkerCount} globalConnections={this.state.globalConnections} />;

		return (
			<div>
				{sessionView}
			</div>
		);
	}
}

JoinSession.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}),
};

export default withRouter(JoinSession);
