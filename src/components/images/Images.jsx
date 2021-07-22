import React from 'react';
import { useSelector } from 'react-redux';
import style from './images.module.css';
import Image from './Image';

function Images(props) {
  const images = useSelector((state) => state.images.images);

  return (
    <div className={style.images}>
      {images.map((image) => {
        return <Image key={image.id} image={image} />;
      })}
    </div>
  );
}

export default Images;
