import React,{useContext, useState} from 'react'
import {APPLContext} from '../App'
import '../css/header.css'

const Header = () =>{
    const aPPLContext = useContext(APPLContext)

    //SalesPersonID id a field from the datafile -- this can be changed for a new ID field from a different file or source
    
    return(
        
        <div className ='App-header-outside-container'>
          
            <div className='title'>
                Company X Sales Team Snap Shot
            </div>
            
                <div className ='App-header-inside-container'>
                    
                        <table>
                            <tbody>
                                <tr><td>
                                    <label>Sales Person ID :</label>
                                    </td>
                                    <td>
                                    <select className='idSelector' multiple={false} onChange={e=>aPPLContext.setselectboxdataHeader(e.target.value)} onClick={e=>aPPLContext.setselectboxdataHeader(e.target.value)} onLoad={e=>aPPLContext.setselectboxdataHeader(e.target.value)}>
                                    
                                    {aPPLContext.data.map((aPPLContext,index) => 
                                        <option key={aPPLContext.SalesPersonID}
                                                value={parseInt(aPPLContext.SalesPersonID)}>
                                                {aPPLContext.SalesPersonID}
                                                </option>
                                        )
                                    }
                                    </select>
                                    </td>
                                </tr>
                        {console.log(aPPLContext.selectboxdataHeader)}
                        </tbody>
                        </table>
                </div>
                
        </div>
       
    )
}

export default Header