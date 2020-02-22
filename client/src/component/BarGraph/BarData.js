import React, {useContext,useRef,useEffect} from 'react'
import {APPLContext} from './../../App'
import './css/bar.css'

const BarData = (props) => {

const xvalue = useRef('');
const height = useRef('');
const yvalue = useRef('');
const diff = useRef('');
const chfill = useRef('blue');
const SalesPersonID = useRef('')




const {x,y} = props
const aPPLContext = useContext(APPLContext)


//number of bars for the chart determined by how many arrays in object

useEffect(() => {
    fill();
  }, []);

const fill = () => {
    if (SalesPersonID.current===parseInt(aPPLContext.selectboxdataHeader)){
        chfill.current = 'sienna'
    }
    else{
        chfill.current = 'tan'
        //console.log('made it in here yahoo')
    }


}


xvalue.current = (x-700)
height.current = (0)
//console.log('this is the space between bars'+ xvalue.current)





    return (
            <svg>
               
               {aPPLContext.data.map((e,index) => {
                   
                    diff.current = (((parseInt(e.SalesYTD)/10000)/10)*4.05)
                    console.log(e.SalesPersonID + ' ' + e.SalesYTD)
                    console.log(diff.current)
                    xvalue.current=xvalue.current+32 //32 equals spacing between the bars
                    yvalue.current = ((y - 100) - diff.current)
                    
                    height.current = y-(yvalue.current+(y-(y-101)))
                    
                    
                    SalesPersonID.current = e.SalesPersonID
                    //console.log(SalesPersonID.current + '  ' + aPPLContext.selectboxdataHeader)   
                    
                        return (
                            <rect
                            className='bar'
                            animation= "bounce linear 400ms"
                            key={e}
                            x={xvalue.current}
                            y={yvalue.current}
                            height={height.current}
                            width="15"
                            value={fill()}
                            fill={chfill.current}
                            
                            />
           
                        );
    
                    }
                  )
                }
               
            </svg>
    )
}

export default BarData