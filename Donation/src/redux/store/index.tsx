// Imports: Dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
// Imports: Redux
import rootReducer from '../reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer', 'registerUserReducer', 'userReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
  timeout: 0,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {ignoredPaths: ['some.nested.path']},
      serializableCheck: false
    }),
});

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
