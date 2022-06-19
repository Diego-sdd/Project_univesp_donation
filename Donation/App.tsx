import React from 'react';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/redux/store';
import Routes from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ed3b3b"
          translucent
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
