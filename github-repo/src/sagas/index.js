import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import { repoSelector } from '../reducers/selectors';
import * as actions from '../actions/index';
import * as constants from '../utils/constants';
import * as api from '../services/api';

function* loadRepoData(action) {
    let endpointPulls = `${constants.API_ROOT}/${action.username}/${action.repo}/pulls?state=all`
    let endpointIssues = `${constants.API_ROOT}/${action.username}/${action.repo}/issues?state=all`
    const responsePulls = yield call(api.callAPIRequest, endpointPulls)
    const responseIssues = yield call(api.callAPIRequest, endpointIssues)
    yield put(actions.startLoadingPulls(responsePulls.data.length, responseIssues.data))
    yield all(responsePulls.data.map(pull => call(fetchPullRequest, pull)))
}

function* fetchPullRequest(pull) {
    const repoBefore = yield select(repoSelector)
    let endpointPulls = `${constants.API_ROOT}/${repoBefore.username}/${repoBefore.repo}/pulls/${pull.number}`
    const responsePull = yield call(api.callAPIRequest, endpointPulls)
    yield put(actions.loadingPullRequests(responsePull.data))

    const repoData = yield select(repoSelector)
    if (repoData.missingPulls === 0) { yield put(actions.loadRepoDataSuccess()) }
}

export default function* watchLoadRepoData() {
    yield takeLatest(actions.type.LOAD_REPO_DATA, loadRepoData)
}