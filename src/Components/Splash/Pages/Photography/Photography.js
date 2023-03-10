import React from 'react';
import './Photography.scss';

import {
  motion
} from "framer-motion";

import {
  useNavigate
} from "react-router-dom";

const Photography = props => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Photography</h1>
      <div className="photography-card-container">
        <div className="card" onClick={() => navigate('/photography/iceland')}>
          <img src="https://res.cloudinary.com/maynardz/image/upload/v1678375005/Photography/6_xdiclb.jpg" />
          <div className="card__head">Iceland</div>
        </div>
        <div className="card" onClick={() => navigate('/photography/amsterdam')}>
          <img src="https://res.cloudinary.com/maynardz/image/upload/v1678375005/Photography/34_suw19o.jpg" />
          <div className="card__head">Amsterdam</div>
        </div>
        <div className="card" onClick={() => navigate('/photography/puerto-rico')}>
          <img src="https://res.cloudinary.com/maynardz/image/upload/v1678375005/Photography/21_i6vhks.jpg" />
          <div className="card__head">Puerto Rico</div>
        </div>
      </div>
    </div>
  )
};

export default Photography;