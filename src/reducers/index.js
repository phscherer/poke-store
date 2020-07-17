import { combineReducers } from 'redux';
import dataReducer from './data';
import modalReducer from './modal';
import detailReducer from './detail';

const rootReducer = combineReducers({
  dataReducer,
  modalReducer,
  detailReducer,
});

export default rootReducer;