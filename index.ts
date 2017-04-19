import * as redux from "redux";

import * as datatypes from './datatypes';
import reducer from './mainreducer';

redux.createStore(reducer);
