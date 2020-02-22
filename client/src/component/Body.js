import React,{useContext, useState} from 'react'
import {APPLContext} from '../App'
import '../css/Body.css'
import SmallWidget from './SmallWidget'
import LargeWidget from './LargeWidget'
const Body = () =>{
    const aPPLContext = useContext(APPLContext)
    //console.log('bodydata')
    //console.log(aPPLContext.data)
    return(
    <div className = 'Body-for-Graphs'>
    
    <span>
    <LargeWidget />
    
    <span>
    <SmallWidget TypeofData= 'SalesYTD' maxvalue= '10000000'/>
    <SmallWidget TypeofData='SalesLastYear' maxvalue = '10000000'/>
    <SmallWidget TypeofData='Bonus' maxvalue = '11000'/>
    <SmallWidget TypeofData='CommissionPct' maxvalue = '100'/>
    </span>
    </span>
    </div>
    )
}
export default Body