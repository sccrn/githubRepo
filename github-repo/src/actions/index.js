export const type = {
    LOAD_REPO_DATA: 'LOAD_REPO_DATA',
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

export function loadRepoDataSuccess(repoInfo, events, issues) {
    return {
        type: type.LOAD_REPO_DATA_SUCCESS,
        repoInfo,
        events,
        issues
    }
}

export function loadRepoDataError(error) {
    return {
        type: type.LOAD_REPO_DATA_ERROR,
        error
    }
}