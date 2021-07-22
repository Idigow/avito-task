import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, loadImage } from '../../redux/actions';
import style from './modal.module.css';

function ModalComponent(props) {
  const id = useParams().id;
  const dispatch = useDispatch();
  const url = useSelector((state) => state.image.image.url);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    if (id) {
      dispatch(loadImage(id));
    }
  }, [dispatch, id]);

  const [comment, setComment] = useState('');

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addComment(id, comment));
  };

  if (!id) {
    return null;
  }
  return (
    <div className={style.modalBG}>
      <div className={style.modalCard}>
        <div className={style.leftSide}>
          <div className={style.closedCard}>
            <Link to={'/'}>❌</Link>
          </div>
          <img src={url} alt="" />
          <input
            className={style.input}
            type="text"
            placeholder="Ваш комментарий"
            onChange={handleChangeComment}
          />
          <button onClick={handleSubmit}>Оставить комментарий</button>
        </div>
        <div className={style.rightSide}>
          {comments.map((comment) => {
            return <div key={comment.id}>{comment.text}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
