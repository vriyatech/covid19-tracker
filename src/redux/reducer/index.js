import { combineReducers } from "redux";

import checkSymptomReducer from "./checkSymptomReducer";

const initialstate = {
    lan: 'np'
    
}

const reducer =(state=initialstate,action) => {
    switch(action.type){
        case 'Update_Lan':
            let newstate = state;
            newstate.lan = action.data;
            return newstate;
            

        default:
            return state;

    }
}

export default combineReducers({
    reducer,
    checkSymptom: checkSymptomReducer,
  
});
