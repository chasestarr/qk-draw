import { take, call, put, takeEvery } from 'redux-saga/effects';

import * as actions from './../../actions';
import * as constants from './../../constants';
import * as api from './../../api';

function* requestDrawing({ payload }) {
  const request = yield call(api.requestDrawing, payload);

  if (request.error) {
    yield put(actions.drawing.requestError(request.error));
  } else {
    yield put(actions.drawing.requestSuccess(request));
  }
}

export default function* watchRequestDrawing() {
  yield takeEvery(constants.drawing.REQUEST, requestDrawing);
}
