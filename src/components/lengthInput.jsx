import PropTypes from 'prop-types';
import React from 'react';

const LengthInput = ({ updateSettings }) => {
  return (
    <div>
      <input
        className="inputMaterial numInput"
        id="length"
        min="0"
        name="Length"
        onChange={updateSettings}
        placeholder="Length of Word"
        type="number"
      />
      <span className="highlight"></span>
      <span className="bar"></span>
    </div>
  );
};

LengthInput.propTypes = {
  updateSettings: PropTypes.func.isRequired,
};

export default LengthInput;
