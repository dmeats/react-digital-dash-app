import React, {useRef,useContext} from 'react'
import {APPLContext} from './../../App'

const XaxisLegend = (props) => {
    const {x,y} = props
    const xvalue = useRef('')
    const yvalue = useRef('')
    const rotateValue = useRef('')
    const aPPLContext = useContext(APPLContext)

    xvalue.current = (x-700)
    yvalue.current = (y-90)

    //rotates words on x axis
    const rotateword = () => {

        rotateValue.current = "rotate (50 " + xvalue.current +"," + yvalue.current + ")"
    }

    return(
    <svg>
       
 {aPPLContext.data.map((e,index) => {
                   
                   
                   xvalue.current=xvalue.current+32 //32 equals spacing between the bars
                  
                   
                   
                       return (
                           <text

                           key={e}
                           x={xvalue.current}
                           y={yvalue.current}
                           value={rotateword()}
                           transform={rotateValue.current}
                           fill="yellow"
                           
                           >{e.SalesPersonID}
                           </text>
          
                       );
   
                   }
                 )
               }
    </svg>
    )

}

export default XaxisLegend
