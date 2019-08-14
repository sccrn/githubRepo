import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import { repoSelector } from '../reducers/selectors';
import * as actions from '../actions/index';
import * as constants from '../utils/constants';
import * as api from '../services/api';

function* loadRepoData(action) {
    let endpointRepo = `${constants.API_ROOT}/${action.username}/${action.repo}`
    let endpointIssues = `${constants.API_ROOT}/${action.username}/${action.repo}/issues`
    let endpointPR = `${constants.API_ROOT}/${action.username}/${action.repo}/pulls`
    const responseRepo = yield call(api.callAPIRequest, endpointRepo)
    const responseIssues = yield call(api.callAPIRequest, endpointIssues)
    const responsePR = yield call(api.callAPIRequest, endpointPR)
    yield put(actions.loadingRepoData(responseRepo.data, responsePR.data, responseIssues.data));

    yield all(responsePR.data.map(pullRequest => call(fetchPullRequest, pullRequest.number)))
    const repo = yield select(repoSelector)
    if(repo.missingPR === 0) { 
        yield all(responseIssues.data.map(issue => call(fetchIssues, issue.number))) 
    }
}

function* fetchPullRequest(id) {
    try {
        const repo = yield select(repoSelector)
        let endpoint = `${constants.API_ROOT}/${repo.username}/${repo.repo}/pulls/${id}`
        const response = yield call(api.callAPIRequest, endpoint)
        yield put(actions.loadingPullRequestsData(response.data))
    } catch (error) {
        yield put(actions.loadRepoDataError(error))
    }
}

function* fetchIssues(id) {
    try {
        const repo = yield select(repoSelector)
        let endpoint = `${constants.API_ROOT}/${repo.username}/${repo.repo}/issues/${id}`
        const response = yield call(api.callAPIRequest, endpoint)
        yield put(actions.loadingIssuesData(response.data))

        const repoInfo = yield select(repoSelector)
        if(repoInfo.missingIssues === 0) { yield put(actions.loadRepoDataSuccess()) }
    } catch (error) {
        yield put(actions.loadRepoDataError(error))
    }
}

export default function* watchLoadRepoData() {
    yield takeLatest(actions.type.LOAD_REPO_DATA, loadRepoData)
}