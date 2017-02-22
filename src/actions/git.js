const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes (base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const GIT = createRequestTypes('GIT');

function action (type, payload = {}) {
  return {type, ...payload};
}


export const git = {
  request : id => action(GIT.REQUEST, {id}),
  success : token => action(GIT.SUCCESS, {token}),
  failure : error => action(GIT.FAILURE, {error}),
};
