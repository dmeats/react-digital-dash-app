import React from 'react'
import Xaxis from './Xaxis'
import Yaxis from './Yaxis'
import YaxisLegend from './YaxisLegend'
import XaxisLegnd from './XaxisLegnd'
import Graphtitle from './Graphtitle'
import GraphBodyBackground from './GraphBodyBackground'


import BarData from './BarData'
// important stuff
const BarGraph = (props) => {
const {x,y}=props
    return(
        <div>

            <svg width={x} height={y}>
            <Graphtitle title="Sales team history YTD" x={x} y={y} />
            <GraphBodyBackground x={x} y={y} />
            <Xaxis x={x} y={y}/>
            <XaxisLegnd x={x} y={y}/>
            <YaxisLegend x={x} y={y}/>
            <Yaxis x={x} y={y}/>
            <BarData x={x} y={y} />
                   

            </svg>
        </div>
        
    )
}
export default BarGraph