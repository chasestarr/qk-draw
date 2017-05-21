import sagas from './../state/sagas';

export default function* rootSaga() {
  yield [sagas()];
}
