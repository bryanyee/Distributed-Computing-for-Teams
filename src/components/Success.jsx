import PropTypes from 'prop-types';
import React from 'react';

import StateHeader from './StateHeader';

const Success = (props) => {
  const dur = props.duration === 1 ? 'second' : 'seconds';

  return (
    <div>
      <div className="state-box">
        <StateHeader
          clearText={props.clearText}
          hash={props.hash}
          isMaster={props.isMaster}
          title={'Password Found'}
        />
        <div className="dataContainer">
          <div className="dataType">
            <p>Duration</p><hr /><br />
            <p>Number of potential alphabet combinations</p><hr /><br />
            <p>Amount of participating clients</p><hr /><br />
            <p>Number of contributing workers (all clients)</p><hr /><br />
            <p>Your workers</p><hr /><br />
          </div>
          <div className="dataValue">
            <p>{props.duration} {dur}</p><hr /><br />
            <p>{props.length}</p><hr /><br />
            <p>{props.globalConnections}</p><hr /><br />
            <p>{props.globalWorkers}</p><hr /><br />
            <p>{props.workers}</p><hr /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

Success.defaultProps = {
  duration: null,
};

Success.propTypes = {
  clearText: PropTypes.string.isRequired,
  duration: PropTypes.number,
  globalConnections: PropTypes.number.isRequired,
  globalWorkers: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
  isMaster: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
  workers: PropTypes.number.isRequired,
};

export default Success;
