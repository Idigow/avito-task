import { IMAGES_LOAD_START, IMAGES_LOAD_SUCCESS } from './types';

const initImages = {
  images: [],
  loading: false,
};

export const imagesReducer = (state = initImages, actions) => {
  switch (actions.type) {
    case IMAGES_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case IMAGES_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        images: actions.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
