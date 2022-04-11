import {combineReducers} from 'redux';
import inputSelect from './dataReducer';

export default combineReducers({
  inputs: inputSelect
});