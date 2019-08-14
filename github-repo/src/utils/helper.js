import * as loadsh from "lodash";
import * as constants from './constants';

export function jsonChartBarCreation(pullRequests) {
  var json = constants.jsonChartBar;
  json.data = constants.jsonSize;

  var keys = [];
  let number = 1;
  json.data.forEach(item => {
    let requests = [];
    let key = `Pull requests ${number}`
    pullRequests.forEach(prItem => {
      if(pullRequestSize(prItem, item)) {
        requests.push(parseInt(createMergeTime(prItem)))
      }
    });
    number += 1
    let sum = requests.reduce((previous, current) => current += previous);
    let avg = sum / requests.length;
    item[key] = avg;
    keys.push(key)
  });
  json.keys = keys
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
  return selectedSize.size === size;
}

function createMergeTime(prItem) {
  var fromDate = parseInt(new Date(prItem.created_at).getTime()); 
  var toDate = parseInt(new Date(prItem.updated_at).getTime());
  var timeDiff = (toDate - fromDate)/3600000;

  return timeDiff
}




