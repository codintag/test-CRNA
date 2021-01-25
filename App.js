/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import navigation file.
import Navigation from './resources/navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './resources/redux/reducers/configureStore';

const store = configureStore();


const App: () => React$Node = () => {
  return (
  /* Navgation created inside app  */
  <Provider store={store}>
    <Navigation />
  </Provider>
  )
};

export default App;