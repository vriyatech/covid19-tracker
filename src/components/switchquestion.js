import React, { Component } from 'react'
import symptom_n_e from '../data/symptom_n_e.yml'

const Questions = ({questionid,lan}) => {
    switch(questionid){
        case '1': return <span>{symptom_n_e.SYM_QUESTIONS1[lan]}</span>
        break;
        case '2':return <span>{symptom_n_e.SYM_QUESTIONS2[lan]}</span>
        break;
        case '3':return <span>{symptom_n_e.SYM_QUESTIONS3[lan]}</span>
        break;
        case '4':return <span>{symptom_n_e.SYM_QUESTIONS4[lan]}</span>
        break;
        case '5':return <span>{symptom_n_e.SYM_QUESTIONS5[lan]}</span>
        break;
        case '6':return <span>{symptom_n_e.SYM_QUESTIONS6[lan]}</span>
        break;
        case '7':return <span>{symptom_n_e.SYM_QUESTIONS7[lan]}</span>
        break;

    }
        

}

export default Questions;