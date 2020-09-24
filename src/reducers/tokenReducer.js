import { SET_TOKEN, REMOVE_TOKEN } from '../actions/actionTypes';

const initialState = {
  token: ''
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};
