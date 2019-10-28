import PropTypes from 'prop-types';
import React, { Component } from 'react';

import WorkerInput from './WorkerInput';
import WorkerExplained from './WorkerExplained';

class PendingWorkers extends Component {
  togglePopup = (id, e) => {
    e.preventDefault();
    const $targetInfo = $('#worker-info');
    const isVisible = $targetInfo.is(':visible');

    if (!isVisible) {
      $targetInfo.show("slow");
      $targetInfo.css('display', 'inline-block');
    } else {
      $targetInfo.hide('200');
    }
  }
  render() {
    return (
      <div>
        <p>A host has already been selected, and the session is about to begin.</p>
        <h3>How many workers would you like to contribute?</h3>
        <p className="worker-recommendation">Optimal number of workers for your device: {this.props.optimalWorkers} </p>
        <p className="worker-recommendation">(Choose 1 worker if you are running other processes)</p><br />
        <div className="pw-container">
          <WorkerInput
            className="form-control"
            optimalWorkers={this.props.optimalWorkers}
            togglePopup={this.togglePopup}
            updateSettings={this.props.updateSettings.bind(null, 'workers')}
          />
          <br />
          <WorkerExplained />
        </div>
        <button
          className="partBTN btn btn-primary"
          onClick={this.props.chooseWorkerCount}
        >
          Submit
        </button>
      </div>
    );
  }
}

PendingWorkers.defaultProps = {
  optimalWorkers: 1,
};

PendingWorkers.propTypes = {
  chooseWorkerCount: PropTypes.func.isRequired,
  optimalWorkers: PropTypes.number,
  updateSettings: PropTypes.func.isRequired,
};

export default PendingWorkers;
