import { type } from '../actions/index';
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
    loading: true,
};

export const repoReducer = (state = initialState, action) => {
    switch (action.type) {
    case type.LOAD_REPO_DATA: 
        return {
            ...state,
            username: action.username,
            repo: action.repo
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
            loading: false
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

const rootReducer = combineReducers({
    repoReducer
});

export default rootReducer;