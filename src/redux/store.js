import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { loadState, saveState } from './localStorage';
import {thunk} from 'redux-thunk';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState({
    product: store.getState().product,
    cart: store.getState().cart,
    auth: store.getState().auth
  });
});

export default store;
