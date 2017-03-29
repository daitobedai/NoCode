import "whatwg-fetch";
import * as types from '../constants/actionTypes';

export function getContent() {
  return function (dispatch) {
    fetch(
      "http://localhost:8080/api/hello", {
        credentials: "include",
        method: "GET",
      })
      .then(response => {
        return response.text()
          .then(text => {
            let result;
            if (text != "") {
              result = JSON.parse(text);
            }

            return dispatch({
              type: types.GET_CONTENT,
              payload: result,
            })
          })
      })
  }
}

export function changeIfameSource(url) {
  return function (dispatch) {
    return dispatch({
      type: types.CHANGE_IFRAME_SOURCE,
      payload: url
    });
  }
}
