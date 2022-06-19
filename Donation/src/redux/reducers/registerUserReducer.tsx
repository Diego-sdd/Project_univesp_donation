import {SET_REGISTER_USER} from '../actions/registerUserAction';

const initialState = {};

const registerUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_REGISTER_USER: {
      return {
        ...state,
        data: action.data,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

export default registerUserReducer;
