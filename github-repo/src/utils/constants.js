export const API_ROOT = 'https://api.github.com/repos';
export const CLIENT_ID = '0abb1fdece0b23693028';
export const CLIENT_SECRET = '00090d8319ca54b5e31a1716a9f76587f434d32c';

export const mergeTimePullRequestSize = "Average Merge Time by Pull Request Size";
export const pullRequestMergeTime = "Average Pull Request Merge Time";
export const issueCloseTime = "Average Issue Close Time";
export const monthSummary = "Month Summary";
export const waitInterval = 2000;

export const jsonTitles = {
    "pullR": {
        "title": "",
        "value": 0,
    },
    "issues": {
        "title": "",
        "value": 0,
    }
}

export const jsonChartBar = {
    labels: ["Small", "Medium", "Large"],
    datasets: [
        {
            label: "Pull request",
            backgroundColor: "#4A9BFF",
            data: []
        }
    ]
}

export const jsonCard = {
    "title": "",
    "value": ""
}