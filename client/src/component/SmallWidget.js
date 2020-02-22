import React,{useContext,useRef,useEffect,useState} from 'react'
import {APPLContext} from '../App'
import DonutGraph from './DonutGraph/DonutGraph'
import '../css/Widget.css'

const SmallWidget = (props) =>{
    const {TypeofData, maxvalue} = props
    const aPPLContext = useContext(APPLContext)
    const Updatenumber = useRef('')
    const RefBonus = useRef(0)
    const RefSalesLastYear = useRef(0)
    const RefSalesYearTD = useRef(0)
    const RefCommissionPct = useRef(0)
    const Reftext = useRef('')
    const Refinfo = useRef(0)
    //console.log (aPPLContext.selectboxdataHeader)
    
    useEffect(() => {
      //console.log (aPPLContext.selectboxdataHeader)
      updatedata()
     
    },[aPPLContext.selectboxdataHeader]);

    
    //updates small widgets with the information once salepersonid is matched with what was selected
    //from dropdown box stored in selectboxdataHeader

    const updatedata = () =>{
     
    let i = 0
    let j= 0
    for (i; i < parseInt(aPPLContext.data.length);) {
   
     if(parseInt(aPPLContext.selectboxdataHeader) === aPPLContext.data[i].SalesPersonID){
      
        Updatenumber.current = aPPLContext.data[i].SalesPersonID
        RefBonus.current = aPPLContext.data[i].Bonus
        RefSalesLastYear.current = aPPLContext.data[i].SalesLastYear
        RefSalesYearTD.current = aPPLContext.data[i].SalesYTD
        RefCommissionPct.current = aPPLContext.data[i].CommissionPct
       
     }
     i=i+1
  }

   
  

  //put the right information into the widgets based on what is provide from TypeofData

    switch(TypeofData) {
        case "Bonus":
          Reftext.current = "Bonus";
          Refinfo.current = RefBonus.current 
                  
          break;
        case "SalesYTD":
          Reftext.current = "Sales YTD";
          Refinfo.current = RefSalesYearTD.current
          break;
        case "SalesLastYear":
          Reftext.current = "Sales Last Year";
          Refinfo.current = RefSalesLastYear.current
          break;
        case "CommissionPct":
          Reftext.current = "Commission %";
          Refinfo.current = RefCommissionPct.current
            break;
        default:
          
      } 
}
    //console.log('this is the smallwidget data')
   
    
   
     

    return(
        <div className = 'small-Widget'>
        
            {aPPLContext.data.map((e,index) => {
              
              console.log(e.SalesPersonID)
              return(
                <div key={e}>
                    {updatedata()}
                </div>
              )
            })}  
            
            <div className = 'small-Widget-text'>
            <p>{Reftext.current}</p></div>
            <div className ='small-Widget-info'>
            <DonutGraph x='230' y='230' info={Refinfo.current} maxvalue={maxvalue} TypeofData={TypeofData}/>
            </div>
        </div>
              

        
    )
}
export default SmallWidget
