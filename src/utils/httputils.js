import axios from 'axios';

export function get(url) {
  return axios({
    method: 'GET',
    url: url
  });
}

export function post(url, data) {
  return axios({
    method: 'POST',
    url: url,
    data: data
  });
}

export function remove(url, id) {
  return axios({
    method: 'DELETE',
    url: `${url}/${id}`
  })
}

export function put(url, id, data) {
  return axios({
    method: 'put',
    url: `${url}/${id}`,
    data: data
  })
}