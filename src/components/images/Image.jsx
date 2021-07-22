import React from 'react';
import style from './image.module.css';
import { Link } from 'react-router-dom';

function Image({ image }) {
  return (
    <div className={style.image}>
      <Link to={`/${image.id}`}>
        <img src={image.url} alt="" />
      </Link>
    </div>
  );
}

export default Image;
