import { IMAGE_LOAD_START, IMAGE_LOAD_SUCCESS } from './types';

const initImage = {
  image: [],
  loading: false,
};

export const imageReducer = (state = initImage, action) => {
  switch (action.type) {
    case IMAGE_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case IMAGE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
