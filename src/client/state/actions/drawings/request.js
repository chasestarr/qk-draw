import * as constants from 'src/client/state/constants';

export function request() {
  return {
    type: constants.drawings.REQUEST
  };
}

export function requestSuccess(drawings) {
  return {
    type: constants.drawings.REQUEST_SUCCESS,
    payload: {
      drawings
    }
  };
}

export function requestError(body) {
  return {
    type: constants.drawings.REQUEST_ERROR,
    payload: body,
    error: true
  };
}
