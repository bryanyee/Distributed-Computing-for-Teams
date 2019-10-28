import PropTypes from 'prop-types';
import React, { Component } from 'react';

import HashExplained from './HashExplained';
import HashInput from './HashInput';
import LengthInput from './LengthInput';
import WorkerExplained from './WorkerExplained';
import WorkerInput from './WorkerInput';

class Performance extends Component {
  togglePopup = (id, e) => {
    e.preventDefault();
    const $targetInfo = $(id);
    const isVisible = $targetInfo.is(':visible');
    const $otherInfoBox = (id === '#hash-info') ? $('#worker-info') : $('#hash-info');

    if (!isVisible) {
      $targetInfo.show("slow");
      $targetInfo.css('display', 'inline-block');
      $otherInfoBox.hide('200');
    } else {
      $targetInfo.hide('200');
      $otherInfoBox.hide('200');
    }
  };

  render() {

    const is = this.props.globalConnections === 1 ? 'is' : 'are';
    const client = this.props.globalConnections === 1 ? 'client' : 'total clients';

    return (
      <div>
        <div className="box host-settings-container">
          <h2> MD5 Hash Decryption </h2>
          <br />
          <br />
          <div className="group">
            <LengthInput
              className="form-control"
              updateSettings={this.props.updateSettings.bind(null, 'length')}
            />
          </div>
          <div className="group">
            <HashInput
              className="form-control inputHash"
              togglePopup={this.togglePopup}
              updateSettings={this.props.updateSettings.bind(null, 'hash')}
            />
            <HashExplained />
          </div>
          <div className="group">
            <WorkerInput
              className="form-control"
              optimalWorkers={this.props.optimalWorkers}
              togglePopup={this.togglePopup}
              updateSettings={this.props.updateSettings.bind(null, 'workers')}
            />
            <WorkerExplained />
          </div>
          <div className="selectGroup">
            <p className="worker-recommendation">Optimal number of workers for your device: <b>{this.props.optimalWorkers}</b> </p>
            <p className="worker-recommendation">(Choose 1 worker if you are running other processes)</p>
            <p className="worker-recommendation">There {is} currently {this.props.globalConnections} {client} in the room.</p>
            <button onClick={this.props.startMD5Decrypt}>Start</button>
          </div>
        </div>
      </div>
    );
  }
}

Performance.defaultProps = {
  globalConnections: null,
  optimalWorkers: 1,
};

Performance.propTypes = {
  globalConnections: PropTypes.number,
  optimalWorkers: PropTypes.number,
  startMD5Decrypt: PropTypes.func.isRequired,
  updateSettings: PropTypes.func.isRequired,
};

export default Performance;
