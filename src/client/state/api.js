import axios from 'axios';

function handleError(res) {
  if (res.error) {
    throw new Error(res.error);
  }

  return res;
}

function describeError(err) {
  return {
    message: err.message,
    error: err
  };
}

export function requestDrawing(payload) {
  const { word } = payload;
  const endpoint = `/${word}/200`;
  return axios.get(endpoint).then(handleError).then(res => res.data).catch(e => describeError(e));
}
