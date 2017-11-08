const fuzzy = require('fuzzy');
const _ = require('lodash');
const utils = require('./utils');
const fakeUsers = utils.generateFakeUsers(1000);

const getUsers = (limit, offset) => Promise.resolve(fakeUsers.slice(parseInt(offset), parseInt(offset) + parseInt(limit)));
const searchUsers = (q, limit) => {
  const names = fakeUsers.map(user => user.name);
  const results = fuzzy.filter(q, names).slice(0, parseInt(limit));
  return Promise.resolve(results.map(entry => {
    const {
      id,
      name,
      avatar,
      job,
    } = fakeUsers[entry.index];
    return {
      id,
      name,
      avatar,
      job,
    };
  }));
};
const getUserFeeds = id => Promise.resolve(fakeUsers[id] && fakeUsers[id].feeds);


module.exports = {
  getUsers,
  searchUsers,
  getUserFeeds,
};
