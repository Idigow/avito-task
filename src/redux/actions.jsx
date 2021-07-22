import {
  ADD_COMMENT,
  COMMENTS_LOAD_SUCCESS,
  IMAGE_LOAD_START,
  IMAGE_LOAD_SUCCESS,
  IMAGES_LOAD_START,
  IMAGES_LOAD_SUCCESS,
} from './types';

export const loadImages = () => {
  return (dispatch) => {
    dispatch({
      type: IMAGES_LOAD_START,
    });
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: IMAGES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};

export const loadImage = (id) => {
  return (dispatch) => {
    dispatch({
      type: IMAGE_LOAD_START,
    });
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: IMAGE_LOAD_SUCCESS,
          payload: json,
        });
        dispatch({
          type: COMMENTS_LOAD_SUCCESS,
          payload: json.comments,
        });
      });
  };
};

export const addComment = (id, comment) => {
  return (dispatch) => {
    // fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,{
    //     method: 'POST',
    //     body: JSON.stringify({text: comment}),
    //     headers:{
    //       "Content-type": "application/json"
    //     }
    // })
    dispatch({
      type: ADD_COMMENT,
      payload: { text: comment },
    });
  };
};
