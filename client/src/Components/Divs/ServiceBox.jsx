import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceBox = ({ icon, title, description }) => {
  return (
    <div className='service-box'>
      <div className='ser-icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2><strong>{title}</strong></h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceBox;
