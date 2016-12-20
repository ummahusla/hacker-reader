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
