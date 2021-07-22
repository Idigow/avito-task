import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadImages } from '../redux/actions';
import Images from './images/Images';
import Header from './header/Header';
import ModalComponent from './modal/ModalComponent';

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <div>
      <Route path="/:id?">
        <Header />
        <Images />
        <ModalComponent />
      </Route>
    </div>
  );
}

export default App;
