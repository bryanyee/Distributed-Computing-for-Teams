import PropTypes from 'prop-types';
import React from 'react';

import StateHeader from './StateHeader';
import Spinner from './Spinner'

const WorkerProcess = (props) => {
  return (
    <div>
      <Spinner />
      <div className="state-box">
        <StateHeader
          hash={props.hash}
          isMaster={props.isMaster}
          title={'Decrypting hash'}
        />
        <div className="dataContainer">
          <div className="dataType">
            <p>Target word length</p><hr /><br />
            <p>Number of potential alphabet combinations</p><hr /><br />
            <p>Number of participating clients</p><hr /><br />
            <p>Number of contributing workers (all clients)</p><hr /><br />
            <p>Your workers</p><hr /><br />
          </div>
          <div className="dataValue">
            <p>{props.length}</p><hr /><br />
            <p>{props.globalNumCombos}</p><hr /><br />
            <p>{props.globalConnections}</p><hr /><br />
            <p>{props.globalWorkers}</p><hr /><br />
            <p>{props.workers}</p><hr /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

WorkerProcess.propTypes = {
  globalConnections: PropTypes.number.isRequired,
  globalNumCombos: PropTypes.number.isRequired,
  globalWorkers: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
  isMaster: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
  workers: PropTypes.number.isRequired,
};

export default WorkerProcess;
