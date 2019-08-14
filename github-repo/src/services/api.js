import axios from 'axios';

export function callAPIRequest(endpoint) {
    return axios.request({
        method: 'get',
        url: endpoint
      });
}