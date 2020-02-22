import React from 'react'
import './css/title.css'
const Graphtitle = (props) => {

    const {title, x, y} =props
    let titlelen = title.length*7
    let xvalue = (parseInt(x) - parseInt(titlelen))/2.5
    //console.log("title x position:" + xvalue)
    return(
        <svg>
         <text className = 'GraphTitle' x={xvalue} y={y-550}>{title}</text> 
        </svg>
    )
}
export default Graphtitle