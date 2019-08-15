import * as loadsh from "lodash";
import * as constants from './constants';

export function jsonChartBarCreation(pullRequests) {
  var json = constants.jsonChartBar;
  var data = [];

  json.labels.forEach(item => {
    let obj = "";
    pullRequests.forEach(pullRequest => {
      if(pullRequestSize(pullRequest, item) && pullRequest.payload.pull_request.merged_at) {
        obj = createMergeTime(pullRequest.payload.pull_request.merged_at)
        data.push(obj)
      }
    });
    let avg = parseInt(loadsh.mean(data))
    json.datasets[0].data.push(avg);
  });
  return json;
}

export function pullRequestSize(item, selectedSize) {
  let total = item.payload.pull_request.additions + item.payload.pull_request.deletions;
  let size;
  if (loadsh.inRange(total, 0, 100)) {
    size = "Small";
  } else if (loadsh.inRange(total, 101, 1000)) {
    size = "Medium";
  } else if (!loadsh.inRange(total, 1001)) {
    size = "Large";
  }
  return selectedSize === size;
}

function createMergeTime(prItem) {
  var today = parseInt(new Date().getTime()); 
  var date = parseInt(new Date(prItem).getTime());
  var timeDiff = (today - date)/3600000;

  return parseInt(timeDiff)
}

export function averageTimePullRequest(events) {
  var data = [];

  events.forEach(event => {
    if(event.type === "PullRequestEvent" && event.payload.pull_request.merged_at) {
      let obj = createMergeTime(event.payload.pull_request.merged_at)
      data.push(obj)
    }
  });
  let avg = parseInt(loadsh.mean(data))
  return avg
}

export function averageTimeIssues(issues) {
  var data = [];

  issues.forEach(issue => {
    if(issue.issue.closed_at) {
      let obj = createMergeTime(issue.issue.closed_at)
      data.push(obj)
    }
  });
  let avg = parseInt(loadsh.mean(data))
  return avg
}


