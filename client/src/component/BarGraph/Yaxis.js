import React,{useContext} from 'react'
import {APPLContext} from './../../App'

const Yaxis = (props) => {
    const aPPLContext = useContext(APPLContext)
    const {x,y} = props
    


    return(
   <svg>
     <line x1={(x-700)} y1="100" x2={(x-700)} y2={(y-100)} stroke ='rgb(255,56,0)' strokeWidth='2' />
    </svg>
    )
}
export default Yaxis