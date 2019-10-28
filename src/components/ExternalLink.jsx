import PropTypes from 'prop-types';
import React from 'react';

const ExternalLink = ({ className, href, children }) => (
  <a
    className={className}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

ExternalLink.defaultProps = {
  children: null,
  className: '',
};

ExternalLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default ExternalLink;
