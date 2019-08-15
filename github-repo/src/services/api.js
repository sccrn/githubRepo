import axios from 'axios';
import * as constants from '../utils/constants';

export function callAPIRequest(endpoint) {
    let resultEndpoint = `${endpoint}?client_id=${constants.CLIENT_ID}&client_secret=${constants.CLIENT_SECRET}`;
    return axios.request({
        method: 'get',
        url: resultEndpoint
      });
}