import * as loadsh from "lodash";
import * as constants from './constants';
import * as moment from 'moment';

export function jsonChartBarCreation(pullRequests) {
  var json = constants.jsonChartBar;
  var data = [];

  json.labels.forEach(item => {
    let obj = "";
    pullRequests.forEach(pullRequest => {
      if(pullRequestSize(pullRequest, item) && pullRequest.merged) {
        obj = createMergeTime(pullRequest.created_at, pullRequest.merged_at)
        data.push(obj)
      }
    });
    let avg = parseInt(loadsh.mean(data))
    json.datasets[0].data.push(avg);
  });
  return json;
}

export function pullRequestSize(item, selectedSize) {
  let total = item.additions + item.deletions;
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
    if(pull.merged) {
      let obj = createMergeTime(pull.created_at, pull.merged_at)
      data.push(obj)
    }
  });
  let avg = loadsh.mean(data)
  let result = formatterAverageTime(avg)
  return result
}

export function averageTimeIssues(issues) {
  var data = [];

  issues.forEach(issue => {
    if(issue.state === "closed") {
      let obj = createMergeTime(issue.created_at, issue.closed_at)
      data.push(obj)
    }
  });
  let avg = loadsh.mean(data)
  let result = formatterAverageTime(avg)
  return result
}

function createMergeTime(start, end) {
  var startedAt = moment(start)
  var endedAt = moment(end)
  return endedAt.diff(startedAt, 'hours')
}

function formatterAverageTime(time) {
  var duration = moment.duration(time, 'hours');

  var result = ""
  if (duration._data.days > 0) { result = duration._data.days === 1 ? `${duration._data.days}day` : `${duration._data.days}days` }
  if (duration._data.hours > 0) { result = `${result} ${duration._data.hours}h`}
  if (duration._data.minutes > 0) { result = `${result}${duration._data.minutes}m`}

  return result
}
