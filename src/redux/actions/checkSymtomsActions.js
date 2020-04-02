import { ADD_RECORD } from "./actionTypes";

const addRecord = ({ formData, history }) => ({
  type: ADD_RECORD,
  formData,
  history
});

export { addRecord };
