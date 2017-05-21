import { take, call, put } from 'redux-saga/effects';

import * as actions from './../../actions';
import * as constants from './../../constants';
import * as api from './../../api';

export default function* requestDrawing() {
  while (true) {
    const watcher = yield take(constants.drawing.REQUEST);
    const request = yield call(api.requestDrawing, watcher.payload);

    if (request.error) {
      yield put(actions.drawing.requestError(request.error));
    } else {
      yield put(actions.drawing.requestSuccess(request));
    }
  }
}
