import React from 'react'

const GraphBodyBackground = (props) => {
const {x,y} = props

    return(
        <React.Fragment>
        <rect x={(x-701)} y={(y-510)} width="600" height="410" fill = "black" stroke = "red" strokeWidth=".2" fillOpacity = "0.4" strokeOpacity = "0.9" />
       
        </React.Fragment>
    )
}
export default GraphBodyBackground
