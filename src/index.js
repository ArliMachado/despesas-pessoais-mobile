import './config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar } from 'react-native';

import App from './App';
import store from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#69D2E7" />
      <App />
    </Provider>
  );
}
