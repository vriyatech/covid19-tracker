import { all, takeEvery, put } from "redux-saga/effects";
import { addRecordLink } from "../../services/apiLink";
import axios from "axios";
import {
  ADD_RECORD_SUCCESS,
  ADD_RECORD_FAIL,
  ADD_RECORD
} from "../actions/actionTypes";

import { notification } from 'antd';

notification.config({
  placement: 'topRight',
  top: 50,
  duration: 5,
});

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description
  });
};

// ADD RECORD
export function* addRecord({ formData, history }) {
  try{
    // console.log(formData,"data");
    const result =   yield fetch(addRecordLink,{method:'POST',
                                  body:JSON.stringify(formData),
                                  headers:{'Content-Type': 'application/json'}
                          })
    const response = yield result.json(); 
    // console.log(response);  

    // const result = fetch('https://apiflu.vriya.com:9092/flu/SaveRecords',{
    //     method:'POST',
    //     mode:'cors',
    //     body:JSON.stringify(data),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(response => response.json()).then(data => console.log(data.status,data.message,data.risk))
    //   .then(data =>this.props.history.push({
    //     pathname: '/CheckResult',
    //     state: data
    //   }));

    if(response.status == 1) {
     yield put({
       type:ADD_RECORD_SUCCESS,
       payload:response,
     })

     const type = 'success';
     const message = 'Record Add Success';
     const description = 'New Record has been successfully added.';
     openNotificationWithIcon(type, message, description);
     history.push('/CheckResult')
    } else {
     yield put({
       type:ADD_RECORD_FAIL,
       error:response.message
     })
      const type = 'error';
      const message = 'Add new record Failed';
      const description = 'Something went wrong. Please try again.';
      openNotificationWithIcon(type, message, description);
    }
  }catch(error){
    yield put({
      type:ADD_RECORD_FAIL,
      error:error
    })
    const type = 'error';
    const message = 'Add new record Failed';
    const description = 'Something went wrong. Please try again.';
    openNotificationWithIcon(type, message, description);
  }
}



export default function* checkSymptomSagas() {
  yield all([
    takeEvery(ADD_RECORD, addRecord)
  ]);
}
