import React, { Component, Fragment } from 'react'
import Questions from './switchquestion'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { json } from 'd3';

const Tableview = ({tabledata,lan}) => (
        <tbody>
        {tabledata.map( (data,i) =>
            <tr key = {i}>
                <td>{data.dateValue}</td>
                <td><Questions questionid={data.questionId} lan={lan} /></td>
                <td>{data.address}</td>
                <td>{lan==='en'?data.answer:data.answer==="yes"?'छ':'छैन'}</td>
                <td>{data.countValue}</td>
            </tr>)}
        </tbody>
);

const today_date = new Date().toISOString().split('T')[0];
export const NepalView = ({npcondition, lan,i=3,today=today_date}) => (<div>

       
            <Fragment >
            <strong><span>{lan==='en'?[npcondition.ENGLISH+': ']:"नेपाल: "}</span><span>{today}</span></strong>
            <br/>
                    {/* <strong><span  key = {'confirmed'+i}>{console.log((npcondition.confirmedCount).2020-04-04)} */}
                       {/* <span style ={{color:'blue'}}>{lan==='en'?'Confirmed: ':"पुष्टि भयो: "}</span>
                        {npcondition.confirmedCount.filter(date=>date ===today)+' | '} */}
                    {/* </span>
                    <span key = {'deaths'+i}>
                       <span style ={{color:'red'}}>{lan==='en'?'Deaths: ':"मृत्यु: "}</span>
                       {data.deaths+' | '}
                    </span>
                    <span  key = {'recovered'+i}>
                        <span style ={{color:'green'}}>{lan==='en'?'Recovered: ':"निको: "}</span>
                        {data.recovered} */}
                    {/* </span> */}
                    {/* </strong> */}
                </Fragment></div>


);

export const WorldView = ({worldcondition, lan}) => (
    <Table striped bordered hover>
       
            <Fragment key="worldcondition">
            <thead><tr><th>{lan==='en'?"World Wide":"विश्वव्यापी"}</th><th>{Date()}</th></tr></thead>
            <tbody>
                    <tr key = 'confirmed'>
                        <td>{lan==='en'?'Confirmed:':"पुष्टि भयो:"}</td>
                        <td>{worldcondition.confirmed}</td>
                    </tr>
                    <tr key = 'deaths'>
                        <td>{lan==='en'?'Deaths:':"मृत्यु:"}</td>
                        <td>{worldcondition.deaths}</td>
                    </tr>
                    <tr key = 'recovered'>
                        <td>{lan==='en'?'Recovered:':"निको:"}</td>
                        <td>{worldcondition.recovered}</td>
                    </tr>
                </tbody></Fragment>
  
    </Table>

);


export const RecordView = ({record, lan}) => (
    <Table striped bordered hover style={{width:'100%'}}>
        <Thead>
            <Tr>
                <Th>{lan==='en'?"Province":"प्रदेश"}</Th>
                <Th>{lan==='en'?"District":"जिल्ला"}</Th>
                <Th>{lan==='en'?"Municipality":"नगरपालिका"}</Th>
                {/* <th>{lan==='en'?"Low Risk":"कम जोखिम"}</th> */}
                {/* <th>{lan==='en'?"Potential Risk":"सम्भावित जोखिम"}</th> */}
                <Th>{lan==='en'?"Risk":"जोखिम"}</Th>
                <Th>{lan==='en'?"Count":"गणना"}</Th>
                
                               
            </Tr>
        </Thead>
        <Tbody>
            {record.map( (data,i) =>
                <Tr key={'row'+i}>
                    <Td>{data.province}</Td>
                    <Td>{data.district}</Td>
                    <Td>{data.municipality}</Td>
                    <Td>{data.risk}</Td>
                    <Td>{data.countValue}</Td>
                    
                    
                        
                </Tr>)
            }
        </Tbody>
        
    </Table>

    


);

export default Tableview;