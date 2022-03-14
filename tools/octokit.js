/**
 * Wrapper around Octokit to add throttling and avoid hitting rate limits
 */

const { throttling } = require("@octokit/plugin-throttling");
const Octokit = require("@octokit/rest").Octokit.plugin(throttling);

const MAX_RETRIES = 3;

module.exports = function (params) {
  params = params || {};

  const octoParams = Object.assign({
    throttle: {
      onRateLimit: (retryAfter, options) => {
        if (options.request.retryCount < MAX_RETRIES) {
          console.warn(`Rate limit exceeded, retrying after ${retryAfter} seconds`)
          return true;
        } else {
          console.error(`Rate limit exceeded, giving up after ${MAX_RETRIES} retries`);
          return false;
        }
      },
      onSecondaryRateLimit: (retryAfter, options) => {
        if (options.request.retryCount < MAX_RETRIES) {
          console.warn(`Abuse detection triggered, retrying after ${retryAfter} seconds`)
          return true;
        } else {
          console.error(`Abuse detection triggered, giving up after ${MAX_RETRIES} retries`);
          return false;
        }
      }
    }
  }, params);

  return new Octokit(octoParams);
}
