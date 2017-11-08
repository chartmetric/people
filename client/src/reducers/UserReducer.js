import { combineReducers } from 'redux';
import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
} from '../actions/types';

const INITIAL_STATES = {
  USERS: {
    data: [],
    isFetching: false,
    error: null,
  }
};

const getUsers = (state = INITIAL_STATES.USERS, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USERS_FULFILLED:
      return {
        data: action.payload,
        isFetching: false,
      };
    case FETCH_USERS_REJECTED:
      return {
        data: [],
        isFetching: false,
        error: 'Something wrong while fetching users.',
      };
    default:
      return state;
  }
};

export default combineReducers({
  all: getUsers,
});
