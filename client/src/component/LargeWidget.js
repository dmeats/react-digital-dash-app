import React from 'react'
import '../css/Widget.css'
import BarGraph from './BarGraph/BarGraph'
const LargeWidget = () =>{

    //size of Large-Widget is 800 width by 600 height
    
    return(
        <div className = 'Large-Widget'>
            <BarGraph x = '800' y = '610'/>
        </div>
    )
}
export default LargeWidget