/**
 * Request a review on a pending pre-release PR
 */

import Octokit from "./octokit.js";
import { loadJSON } from "./utils.js";

// Repository to process and PR reviewers
const owner = "w3c";
const repo = "webref";
const reviewers = ["dontcallmedom", "foolip", "tidoust"];


/**
 * Create or update pre-release pull request
 *
 * @function
 * @param {String} type Package name
 */
async function requestReview(type) {
  console.log(`Check pre-release PR for the @webref/${type} package`);
  const searchResponse = await octokit.search.issuesAndPullRequests({
    q: `repo:${owner}/${repo} type:pr state:open head:release-${type}-`
  });
  const found = searchResponse?.data?.items?.[0];

  const pendingPRResponse = found ?
    await octokit.pulls.get({
      owner, repo,
      pull_number: found.number
    }) :
    null;
  const pendingPR = pendingPRResponse?.data;
  console.log(pendingPR ?
    `- Found pending pre-release PR: ${pendingPR.title} (#${pendingPR.number})` :
    "- No pending pre-release PR");
  if (!pendingPR) {
    return;
  }

  console.log(`- Targeted list of reviewers: ${reviewers.join(", ")}`);
  console.log(`- Pending PR was created by: ${pendingPR.user.login}`);
  const currentReviewers = pendingPR.requested_reviewers.map(r => r.login);
  console.log(`- Current reviewers: ${currentReviewers.length > 0 ? currentReviewers.join(", ") : "none"}`);
  const reviewersToAdd = reviewers.filter(login => !currentReviewers.includes(login) && pendingPR.user.login !== login);
  console.log(`- Reviewers to add: ${reviewersToAdd.length > 0 ? reviewersToAdd.join(", ") : "none"}`);
  if (reviewersToAdd.length > 0) {
    await octokit.pulls.requestReviewers({
      owner,
      repo,
      pull_number: pendingPR.number,
      reviewers: reviewersToAdd
    });
    console.log("- Reviewers added");
  }
}


/*******************************************************************************
Retrieve GH_TOKEN from environment, prepare Octokit and kick things off
*******************************************************************************/
const config = await loadJSON("config.json");
const GH_TOKEN = config?.GH_TOKEN ?? process.env.GH_TOKEN;
if (!GH_TOKEN) {
  console.error("GH_TOKEN must be set to some personal access token as an env variable or in a config.json file");
  process.exit(1);
}

const octokit = new Octokit({
  auth: GH_TOKEN,
  //log: console
});

requestReview("css")
  .then(() => console.log())
  .then(() => requestReview("elements"))
  .then(() => console.log())
  .then(() => requestReview("events"))
  .then(() => console.log())
  .then(() => requestReview("idl"))
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });