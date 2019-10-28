import PropTypes from 'prop-types';
import React, { Component } from 'react';

class HashInput extends Component {
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.togglePopup(e);
    }
  };

  togglePopup = (e) => {
    this.props.togglePopup('#hash-info', e);
  };

  render() {
    return (
      <div>
        <input
          className="inputMaterial"
          id="hash"
          name="Hash"
          onChange={this.props.updateSettings}
          placeholder="Hash"
          type="text"
        />
        <i
          className="material-icons help-button"
          onClick={this.togglePopup}
          onKeyPress={this.onKeyPress}
          role="button"
          tabIndex="0"
        >
          help
        </i>
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
    );
  }
}

HashInput.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  updateSettings: PropTypes.func.isRequired,
}

export default HashInput;
