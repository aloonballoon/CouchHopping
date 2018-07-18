import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { logIn } from './actions/session_actions';
import Root from './components/root';
import {fetchUser, fetchHosts} from './util/users_util';
import { updateStatus } from './actions/user_actions/user_actions';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }



  window.fetchHosts = fetchHosts;
  window.getState = store.getState;
  window.logIn = logIn;
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.fetchUser = fetchUser;
  window.updateStatus = updateStatus;
});
