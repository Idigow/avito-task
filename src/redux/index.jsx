import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { imagesReducer } from './imagesReducer';
import { imageReducer } from './imageReducer';
import { commentsReducer } from './commentsReducer';

const { createLogger } = require('redux-logger');

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  images: imagesReducer,
  image: imageReducer,
  comments: commentsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
