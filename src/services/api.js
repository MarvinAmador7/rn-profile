import 'isomorphic-fetch';

const API_ROOT = 'https://keys-e0a7.restdb.io/rest/';

function callApi (endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1 ) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response =>
    response.json())
    .catch(error => error);
}

// API
export const fetchGitKey = id => callApi(`keys/${id}`);
