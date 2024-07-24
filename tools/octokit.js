/**
 * Wrapper around Octokit to add throttling and avoid hitting rate limits
 */

import { throttling } from "@octokit/plugin-throttling";
import { Octokit as rawOctokit } from "@octokit/rest";
const Octokit = rawOctokit.plugin(throttling);

const MAX_RETRIES = 3;

export default function (params) {
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
