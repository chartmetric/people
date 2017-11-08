import {
  FETCH_USERS,
} from './types';

export const fetchUsers = (
  q,
  limit
) => ({
  type: FETCH_USERS,
  payload: new Promise((resolve, reject) => {
    fetch(`/users?q=${q}&&limit=${limit}`)
    .then(r => r.json())
    .then(r => resolve(r.data))
    .catch(e => reject(e));
  }),
});
