import PropTypes from 'prop-types';
import React from 'react';

const StateHeader = (props) => {
  const className = ('state-header').concat(!props.clearText ? ' bc-lb' : '');
  const clientType = props.isMaster ? 'Host' : 'Client'

  return (
    <div className={className}>
      <span className="client-type">{clientType}</span>
      <h2>{props.title}: <em>{props.clearText}</em>
        <br/>{props.hash}
      </h2>
    </div>
  );
};

StateHeader.defaultProps = {
  clearText: '',
};

StateHeader.propTypes = {
  clearText: PropTypes.string,
  hash: PropTypes.string.isRequired,
  isMaster: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default StateHeader;
