import {
  ADD_RECORD,
  ADD_RECORD_SUCCESS,
  ADD_RECORD_FAIL,
} from "../actions/actionTypes";

const initialState = {
  newRecord: [],
  fetching: false,
  error: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return {
        ...initialState,
        fetching: true
      };
    case ADD_RECORD_SUCCESS:
      return {
        ...initialState,
        fetching: false,
        newRecord: action.payload
      };
    case ADD_RECORD_FAIL:
      return {
        ...initialState,
        fetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
