import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { disconnectSocket } from '../Socket';
import { terminateAllWorkers } from '../workerController';

class Host extends Component {
	// Host renders with props.ready === true when the server resets. In this case, reset the client state.
	componentDidMount() {
		if (this.props.ready) {
			disconnectSocket();
			terminateAllWorkers();
			this.props.resetState();
		}
	}

	render() {
		return (
			<div className="card well well-lg">
				<div className="container-fluid">
					<div className="row text-center">
						<h2>Would you like to host?</h2>
						<br />
						<button
							className="hostBTN btn btn-primary btn-md"
							onClick={this.props.claimMaster}
						>
							Host
						</button>
						<br /><br />
						<img
							alt=""
							className="center-block img-responsive host-img"
							src="antenna.png"
						/>
					</div>
				</div>
			</div>
		);
	}
}

Host.defaultProps = {
	ready: false,
};

Host.propTypes = {
	claimMaster: PropTypes.func.isRequired,
	ready: PropTypes.bool,
	resetState: PropTypes.func.isRequired,
};

export default Host;
