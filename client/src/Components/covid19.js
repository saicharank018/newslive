import React, { useEffect, useState } from 'react'

/**
* @author
* @function CovidCases
**/

const CovidCases = (props) => {
    let [cdata,setCdata]=useState([]);
    useEffect(()=>{
        fetch("https://api.covid19india.org/data.json")
        .then(res=>res.json())
        .then(res=>{
            setCdata(res.statewise)
            cdata.shift()
            // console.log(res.statewise);
        })
        .catch(err=>{
            console.log(err)
        })

    },[])
  return(
    <div style={{marginLeft:"1%",marginRight:"1%"}}>
        <h3 style={{marginTop:"15px",marginBottom:"15px"}}>Covid Cases in India</h3>
        <table id="students" rules={"all"}>
            <thead>
                <tr>
                    <th>lastupdatedtime</th>
                    <th>state</th>
                    <th>confirmed</th>
                    <th>active</th>
                    <th>deaths</th>
                </tr>
            </thead>
            <tbody>
                {
                    cdata.map((item,index)=>(
                        <tr>
                            <td>{item.lastupdatedtime}</td>
                            <td>{item.state}</td>
                            <td>{item.confirmed}</td>
                            <td>{item.active}</td>
                            <td>{item.deaths}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
   )

 }

export default CovidCases