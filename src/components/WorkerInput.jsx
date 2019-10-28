import PropTypes from 'prop-types';
import React from 'react';

const WorkerInput = (props) => {
  const togglePopup = (e) => {
    props.togglePopup('#worker-info', e);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      togglePopup(e);
    }
  };

  return (
    <div>
      <input
        className="inputMaterial numInput"
        id="workers"
        max={`${props.optimalWorkers}`}
        min="1"
        name="workers"
        onChange={props.updateSettings}
        placeholder="Number of Workers"
        type="number"
      />
      <i
        className="material-icons help-button"
        onClick={togglePopup}
        onKeyPress={onKeyPress}
        role="button"
        tabIndex="0"
      >
        help
      </i>
      <span className="highlight"></span>
    </div>
  );
};

WorkerInput.defaultProps = {
  optimalWorkers: 1,
};

WorkerInput.propTypes = {
  optimalWorkers: PropTypes.number,
  togglePopup: PropTypes.func.isRequired,
  updateSettings: PropTypes.func.isRequired,
};

export default WorkerInput;
