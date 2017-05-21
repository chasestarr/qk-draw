import * as constants from './../../constants';

export function request(word) {
  return {
    type: constants.drawing.REQUEST,
    payload: { word }
  };
}

export function requestSuccess(drawings) {
  return {
    type: constants.drawing.REQUEST_SUCCESS,
    payload: {
      drawings
    }
  };
}

export function requestError(body) {
  return {
    type: constants.drawing.REQUEST_ERROR,
    payload: body,
    error: true
  };
}
