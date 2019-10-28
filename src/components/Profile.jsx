import PropTypes from 'prop-types';
import React from 'react';

import ExternalLink from './ExternalLink';

const Profile = ({ name, imgSrc, urls }) => (
  <div className="col-md-4 text-center">
    <img
      alt=""
      className="profile-img"
      src={imgSrc}
    />
    <br/>
    <div>
      <h3>{name}</h3>
      <ExternalLink href={urls.linkedin}>
        <img
          alt=""
          className="icons img-thumbnail"
          src="/linkedin.png"
        />
      </ExternalLink>
      <ExternalLink href={urls.github}>
        <img
          alt=""
          className="icons img-thumbnail"
          src="/github-icon.png"
        />
      </ExternalLink>
    </div>
  </div>
);

Profile.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urls: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
}

export default Profile;
