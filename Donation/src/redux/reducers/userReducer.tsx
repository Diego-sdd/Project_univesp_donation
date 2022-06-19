import {SET_DATA, RESET_DATA} from '../actions/userActions';

// Initial State
const initialState = {};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        // State
        ...state,
        // Redux Store
        data: action.data,
      };
    }
    case RESET_DATA: {
      return initialState;
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;
