/**
 * Analytics for green jobs data set.
 * Created by Clint on 10/1/2015.
 */

/* globals _, greenjobs */
/* exported testData, listIndustries, countyGreenJobs, jobswithKeyword */

/**
 * Provides a small test data set taken from the green jobs data set.
 * @type {Array.}
 */
var testData = greenjobs.splice(0, 10);

/**
 * Creates a list of the unique industries represented in the green jobs data set.
 * @param data  The green jobs data set.
 * @returns  An array of green job industry names.
 */
function listIndustries(data) {
  return _.uniq(_.pluck(data, 'Industry'));
}

/**
 * Creates an object with keys given by the names of counties, and key values given as the total number of greenjobs in the respective county.
 * @param data  The green job data set.
 * @returns  An object where the keys are County names and the values are the number of Green Jobs listed in that County.
 */
function countyGreenJobs(data) {
  return _.countBy(data, function (num) {
    return num['County'];
  });
}

function jobswithKeyword(data, keyword) {
  var jobs = _.filter(data, function (num) {
    return num['Job Title'].indexOf(keyword) !== -1;
  });

  return _.pluck(jobs, 'Job Title');
}

/* Test code for this program.
console.log(listIndustries(greenjobs));
console.log(countyGreenJobs(greenjobs));
console.log(jobswithKeyword(testData, 'PV'));
*/

/* ADDITIONAL NOTES:
 --Reformat Code:  Code -> Reformat Code
 --list the jshint "error variables/functions" within comments, near TOP of screen as above...
 --GitHub part starts on 29:45!

 --README
 --.gitignore
 --GitHub:  summary, commit changes
 --webpage:  35:45

 */
