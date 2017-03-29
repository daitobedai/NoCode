import {GET_CONTENT,CHANGE_IFRAME_SOURCE} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import _ from 'lodash';


export default function showContentReducer(state = initialState.showContent, action) {
  switch (action.type) {
    case CHANGE_IFRAME_SOURCE: {
      return objectAssign({}, state, {iframeSource: action.payload});
    }
    case GET_CONTENT: {
      let obList = action.payload;
      let urlList = [];

      _.forEach(obList, (item, index) => {
        urlList.push({
          key: index,
          title: item.title,
          url: item.url
        })
      });

      return objectAssign({}, state, {urlList: urlList});
    }
    default: {
      return state;
    }
  }
}
