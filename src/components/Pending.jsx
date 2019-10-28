import PropTypes from 'prop-types';
import React from 'react';

import PendingStart from './PendingStart';
import PendingWorkers from './PendingWorkers';

const Pending = (props) => {
	const pending = !props.ready ? (
		<PendingWorkers
			chooseWorkerCount={props.chooseWorkerCount}
			optimalWorkers={props.optimalWorkers}
			updateSettings={props.updateSettings}
		/>
	) : (
		<PendingStart
			globalConnections={props.globalConnections}
			workers={props.workers}
		/>
	);

	return (
		<div className="card well well-lg">
			<div className="pending">
				{pending}
			</div>
		</div>
	);
};

Pending.defaultProps = {
	optimalWorkers: 1,
	ready: false,
};

Pending.propTypes = {
	chooseWorkerCount: PropTypes.func.isRequired,
	globalConnections: PropTypes.number.isRequired,
	optimalWorkers: PropTypes.number,
	ready: PropTypes.bool,
	updateSettings: PropTypes.func.isRequired,
	workers: PropTypes.number.isRequired,
};

export default Pending;
