import React from 'react'
import './css/DonutGraph.css'

const DonutGraph = (props) => {
const {x,y,info,maxvalue,TypeofData} = props


let infolength = info.length
let und=''
console.log(infolength)
if(infolength === undefined){infolength=0
     und=undefined}
console.log(infolength)
let xvalue = 0
let checkvalue = parseInt(info)
console.log (info)

//check length of string for spacing in the middle of the circle
if (infolength === 0 && checkvalue <=10000){
    xvalue = ((42-infolength)/2)-7
    console.log('in here looking at info =0')
}
else {
    xvalue = ((42-infolength)/2)-13
    console.log('in here looking at info greater then 0')
}
console.log ('this is the info in the checkvalue : ' + checkvalue)
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  let formatedinfo =''
  if(und === undefined){
    formatedinfo = formatter.format(info)
    console.log('made it in here looking at the info that is undefined' + info)
  }
  else
  {
    formatedinfo = formatter.format(Math.round(checkvalue) )
  }

  let percent = 0
  let rightvalue = 0
  let outsidecirleadjuster = ''
  percent = (info/maxvalue)*100
 
  if (percent > 0 && percent < 1){percent = percent * 1000}
  rightvalue = 100-percent
  if (TypeofData === 'CommissionPct'){formatedinfo=percent}
  outsidecirleadjuster=percent+" "+rightvalue
  console.log ('percent = ' + percent)
  console.log ('outsidecirleadjuster = ' + outsidecirleadjuster)

    return(
        <div>
            
           
            
            <svg width={x} height={y} viewBox="0 0 62 62" class="donut">
                
                    <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="pink"></circle>
                    <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="green" stroke-width="4"></circle>
                    <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="red" stroke-width="4" stroke-dasharray="30 70" stroke-dashoffset="0"></circle>
                    <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="yellow" stroke-width="4" stroke-dasharray="30 70" stroke-dashoffset="70"></circle>
                    
                    <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="blue" stroke-width="2" stroke-linecap='round' stroke-dasharray={outsidecirleadjuster} stroke-dashoffset="0" ></circle>
                    <text x='40' y='21'className='maxvalue'>{maxvalue}</text>
                    <text x={xvalue} y='21'className='info'>{formatedinfo}</text>
            </svg>
            
        </div>
    )
}

export default DonutGraph