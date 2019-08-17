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

export function loadRepoDataSuccess(pulls, issues) {
    return {
        type: type.LOAD_REPO_DATA_SUCCESS,
        pulls,
        issues
    }
}

export function loadRepoDataError(error) {
    return {
        type: type.LOAD_REPO_DATA_ERROR,
        error
    }
}