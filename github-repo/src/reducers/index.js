import { type } from '../actions/index';
import { actionType } from '../actions/chartActions';
import { combineReducers } from 'redux'

const initialState = {
    username: null,
    repo: null,
    pulls: [],
    issues: [],
    missingPulls: 0,
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
    case type.START_LOADING_PULLS:
        return {
            ...state,
            missingPulls: action.missingPulls,
            issues: action.issues
        }
    case type.LOADING_PULLS:
        return {
            ...state,
            missingPulls: state.missingPulls - 1,
            pulls: [...state.pulls, action.pull]
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