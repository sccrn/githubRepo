export const actionType = {
    SELECTED_PULL_REQUEST: 'SELECT_PULL_REQUEST',
    SELECTED_ISSUES: 'SELECTED_ISSUES'
};

export function selectPullRequest() {
    return {
        type: actionType.SELECTED_PULL_REQUEST
    }
}

export function selectIssues() {
    return {
        type: actionType.SELECTED_ISSUES
    }
}