import React,{useState,useEffect} from 'react'
import MyEchartComp from './echartsComp'
import {EchartOneOption,menuArr} from '../../config/menu'
import './index.less'
export default function EcharBox(props) {
    return (
        <div className='echart-box'>
            <div className='box-one'>
                <MyEchartComp
                    option={EchartOneOption(menuArr)}
                />
            </div>
        </div>
    )
}
