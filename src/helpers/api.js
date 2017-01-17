import axios from 'axios';

export function getTopStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
}

export function getNewStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
}

export function getBestStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
}

export function getStoryItem(storyId) {
  return axios.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json?print=pretty');
}

export function getJobStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty');
}

export function getJobItem(jobStoryId) {
  return axios.get('https://hacker-news.firebaseio.com/v0/item/' + jobStoryId + '.json?print=pretty');
}
