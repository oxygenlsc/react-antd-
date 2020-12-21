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
            <div className="box-two">
                <b>不积跬步,无以致千里;不积小流,无以成江海</b>
               <h1>此项目克隆地址：https://github.com/oxygenlsc/react-antd-.git</h1>
            </div>
        </div>
    )
}
