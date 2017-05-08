import * as redux from "redux";

import * as datatypes from './datatypes';
import reducer from './mainreducer';

export function gameRedux() {
  let store = redux.createStore(reducer);
  store.dispatch({ type : 'init' });
  return store;
};
