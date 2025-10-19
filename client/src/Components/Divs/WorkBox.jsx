import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const WorkBox = ({ imgSrc, alt, title, link, ariaLabel }) => {
  return (
    <div className="work">
      <img src={imgSrc} alt={alt} />
      <div className="layer">
        <h3><strong>{title}</strong></h3>
          <a href={link} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel}>
            <FontAwesomeIcon icon={faLocationArrow} />
          </a>
      </div>
    </div>
  );
};

export default WorkBox