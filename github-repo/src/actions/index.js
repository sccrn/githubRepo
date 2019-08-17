export const type = {
    LOAD_REPO_DATA: 'LOAD_REPO_DATA',
    START_LOADING_PULLS: 'START_LOADING_PULLS',
    LOADING_PULLS: 'LOADING_PULLS',
    LOAD_REPO_DATA_SUCCESS: 'LOAD_REPO_DATA_SUCCESS',
    LOAD_REPO_DATA_ERROR: 'LOAD_REPO_DATA_ERROR',
};

export function loadRepoData(username, repo) {
    return {
        type: type.LOAD_REPO_DATA,
        username,
        repo
    }
}

export function startLoadingPulls(missingPulls, issues) {
    return {
        type: type.START_LOADING_PULLS,
        missingPulls,
        issues
    }
}

export function loadingPullRequests(pull) {
    return {
        type: type.LOADING_PULLS,
        pull
    }
}

export function loadRepoDataSuccess() {
    return {
        type: type.LOAD_REPO_DATA_SUCCESS
    }
}

export function loadRepoDataError(error) {
    return {
        type: type.LOAD_REPO_DATA_ERROR,
        error
    }
}