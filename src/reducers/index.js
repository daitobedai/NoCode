import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import showContent from './showContentReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  showContent,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
