import React from 'react'

const Xaxis = (props) => {
const {x,y} = props


    return(
        <svg>
       <line x1={(x-700)} y1={(y-100)} x2={(x-100)} y2={(y-100)} stroke ='rgb(255,56,0)' strokeWidth='2' />
    
        </svg>
    )
}
export default Xaxis