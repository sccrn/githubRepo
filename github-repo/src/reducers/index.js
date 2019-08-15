import { type } from '../actions/index';
import { actionType } from '../actions/chartActions';
import { combineReducers } from 'redux'

const initialState = {
    username: null,
    repo: null,
    repoInfo: [],
    allPullRequests: [],
    allIssues: [],
    pullRequests: [],
    issues: [],
    missingPR: null,
    missingIssues: null,
    loading: false,
    loaded: false,
};

const initialStateChartLine = {
    pullRequestSelected: true,
    issuesSelected: false
};

export const repoReducer = (state = initialState, action) => {
    switch (action.type) {
    case type.LOAD_REPO_DATA: 
        return {
            ...state,
            username: action.username,
            repo: action.repo,
            loading: true,
            loaded: false,
        }
    case type.LOADING_REPO:
        return {
            ...state,
            missingPR: action.pullRequests.length,
            missingIssues: action.issues.length,
            allPullRequests: action.pullRequests,
            allIssues: action.issues,
            repoInfo: action.repoInfo
        }
    case type.LOADING_PULL_REQUEST:
        return {
            ...state,
            missingPR: state.missingPR - 1,
            pullRequests: [...state.pullRequests, action.pullRequest]
        }
    case type.LOADING_ISSUES:
        return {
            ...state,
            missingIssues: state.missingIssues - 1,
            issues: [...state.issues, action.issues]
        }
    case type.LOAD_REPO_DATA_SUCCESS:
        return {
            ...state,
            loading: false, 
            loaded: true
        }
    case type.LOAD_REPO_DATA_ERROR:
        return {
            username: state.username,
            repo: state.repo,
            error: action.error
        }
    default: return state;
    }
};

export const tabReducer = (state = initialStateChartLine, action) => {
    switch(action.type) {
    case actionType.SELECTED_PULL_REQUEST:
        return {
            pullRequestSelected: true,
            issuesSelected: false
        }
    case actionType.SELECTED_ISSUES:
        return {
            pullRequestSelected: false,
            issuesSelected: true
        }
    default: return state;
    }
};

const rootReducer = combineReducers({
    repoReducer,
    tabReducer
});

export default rootReducer;