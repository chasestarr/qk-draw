import request from './request';

export default function* drawingSaga() {
  yield [request()];
}
