import React, {useRef,useContext} from 'react'
import {APPLContext} from './../../App'

const YaxisLegend = (props) => {
//mindata=0.0
//Maxdata=5200475.2313'

//height of y axis is 410
const {x,y} = props
    const xvalue = useRef('')
    const yvalue = useRef('')
    const space = useRef('')
    const aPPLContext = useContext(APPLContext)

    xvalue.current = (x-785)
    let spacebetweenyvalues = 408/5
    space.current = spacebetweenyvalues
    let StartingPointonYaxis = (y-100)
    yvalue.current = StartingPointonYaxis
    
    let legendforyaxis = ['$2,000,000','$4,000,000','$6,000,000','$8,000,000','$10,000,000']
//console.log (legendforyaxis)
//console.log ('made it in YaxisLegend')
    return (
        <svg>
            {legendforyaxis.map((e,index) => {
                   
                   
                   
                  
                   yvalue.current=yvalue.current-space.current
                   
                       return (
                           <text

                           key={e}
                           x={xvalue.current}
                           y={yvalue.current}
                           
                           
                           fill="yellow"
                           
                           >{e}
                           </text>
          
                       );
                      
   
                   }
                 )
               }
        </svg>

    ) 
    
}
export default YaxisLegend