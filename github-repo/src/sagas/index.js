import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import { repoSelector } from '../reducers/selectors';
import * as actions from '../actions/index';
import * as constants from '../utils/constants';
import * as api from '../services/api';

function* loadRepoData(action) {
    let endpointEvents = `${constants.API_ROOT}/${action.username}/${action.repo}/pulls?state=all`
    let endpointIssues = `${constants.API_ROOT}/${action.username}/${action.repo}/issues?state=all`
    const responseEvents = yield call(api.callAPIRequest, endpointEvents)
    const responseIssues = yield call(api.callAPIRequest, endpointIssues);
    yield put(actions.loadRepoDataSuccess(responseEvents.data, responseIssues.data))
}


export default function* watchLoadRepoData() {
    yield takeLatest(actions.type.LOAD_REPO_DATA, loadRepoData)
}