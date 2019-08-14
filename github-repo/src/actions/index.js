export const type = {
    LOAD_REPO_DATA: 'LOAD_REPO_DATA',
    LOADING_REPO: 'LOADING_REPO',
    LOADING_PULL_REQUEST: 'LOADING_PULL_REQUEST',
    LOADING_ISSUES: 'LOADING_ISSUES',
    LOAD_REPO_DATA_SUCCESS: 'LOAD_REPO_DATA_SUCCESS',
    LOAD_REPO_DATA_ERROR: 'LOAD_REPO_DATA_ERROR'
};

export function loadRepoData(username, repo) {
    return {
        type: type.LOAD_REPO_DATA,
        username,
        repo
    }
}

export function loadingRepoData(repoInfo, pullRequests, issues) {
    return {
        type: type.LOADING_REPO,
        repoInfo,
        pullRequests,
        issues
    }
}

export function loadingPullRequestsData(pullRequest) {
    return {
        type: type.LOADING_PULL_REQUEST,
        pullRequest
    }
}

export function loadingIssuesData(issues) {
    return {
        type: type.LOADING_ISSUES,
        issues
    }
}

export function loadRepoDataSuccess() {
    return {
        type: type.LOAD_REPO_DATA_SUCCESS,
    }
}

export function loadRepoDataError(error) {
    return {
        type: type.LOAD_REPO_DATA_ERROR,
        error
    }
}