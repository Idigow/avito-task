import { ADD_COMMENT, COMMENTS_LOAD_SUCCESS } from './types';

const initImage = {
  comments: [],
  loading: false,
};

export const commentsReducer = (state = initImage, action) => {
  switch (action.type) {
    case COMMENTS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
