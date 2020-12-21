import React from 'react'
import EchartBox from '../components/menuPageComponent/echarBox'
import FlowItem from '../components/menuPageComponent/flowItemBox'

export default function DirectoryOverview(props) {
    return (
        <div className='menu-page-container' style ={{display:'flex'}}>
            <EchartBox/>
            <FlowItem/>
        </div>
    )
}
