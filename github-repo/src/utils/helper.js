import * as loadsh from "lodash";
import * as constants from './constants';

export function jsonChartBarCreation(pullRequests) {
  var json = constants.jsonChartBar;
  var data = [];

  json.labels.forEach(item => {
    let obj = "";
    pullRequests.forEach(pullRequest => {
      if(pullRequestSize(pullRequest, item) && pullRequest.state === "closed") {
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

export function averageTimePullRequest(pulls) {
  var data = [];

  pulls.forEach(pull => {
    if(pull.state === "closed") {
      let obj = createMergeTime(pull.created_at, pull.closed_at)
      data.push(obj)
    }
  });
  let avg = parseInt(loadsh.mean(data))
  return avg
}

export function averageTimeIssues(issues) {
  var data = [];

  issues.forEach(issue => {
    if(issue.state === "closed") {
      let obj = createMergeTime(issue.created_at, issue.closed_at)
      data.push(obj)
    }
  });
  let avg = parseInt(loadsh.mean(data))
  return avg
}

function createMergeTime(created, closed) {
  var closedTime = parseInt(new Date(closed).getTime()); 
  var createdTime = parseInt(new Date(created).getTime());
  var timeDiff = (closedTime - createdTime)/3600000;

  return parseInt(timeDiff)
}
