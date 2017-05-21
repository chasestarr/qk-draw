import drawing from './drawing';

export default function* rootSaga() {
  yield [drawing()];
}
