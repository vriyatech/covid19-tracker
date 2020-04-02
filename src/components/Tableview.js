import React, { Component, Fragment } from 'react'
import Questions from './switchquestion'
import {Table  } from 'reactstrap';

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

export const NepalView = ({npcondition, lan}) => (<div>

       
            {npcondition.map( (data,i) =><Fragment key={i}>
            <span>{lan==='en'?[data.countryregion+': ']:"नेपाल: "}</span><span>{lan==='en'?data.lastupdate.replace('T'," | Time: "):data.lastupdate.replace("T"," | समय: ")}</span>
            <br/>
                    <span key = {'confirmed'+i}>
                       {lan==='en'?'Confirmed: ':"पुष्टि भयो: "}
                        {data.confirmed}
                    </span><br/>
                    <span key = {'deaths'+i}>
                       {lan==='en'?'Deaths: ':"मृत्यु: "}
                       {data.deaths}
                    </span><br/>
                    <span key = {'recovered'+i}>
                        {lan==='en'?'Recovered: ':"निको: "}
                        {data.recovered}
                    </span>
                </Fragment>)}</div>


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
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>{lan==='en'?"Province":"प्रदेश"}</th>
                <th>{lan==='en'?"District":"जिल्ला"}</th>
                <th>{lan==='en'?"Municipality":"नगरपालिका"}</th>
                {/* <th>{lan==='en'?"Low Risk":"कम जोखिम"}</th> */}
                {/* <th>{lan==='en'?"Potential Risk":"सम्भावित जोखिम"}</th> */}
                <th>{lan==='en'?"Risk":"जोखिम"}</th>
                <th>{lan==='en'?"Count":"गणना"}</th>
                
                               
            </tr>
        </thead>
        <tbody>
            {record.map( (data,i) =>
                <tr key={'row'+i}>
                    <td>{data.province}</td>
                    <td>{data.district}</td>
                    <td>{data.municipality}</td>
                    <td>{data.risk}</td>
                    <td>{data.countValue}</td>
                    
                    
                        
                </tr>)
            }
        </tbody>
        
    </Table>


);

export default Tableview;