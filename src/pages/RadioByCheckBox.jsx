import React,{useState,useEffect} from 'react'
import './index.less'
import Radios from '../components/radioByCkeckBox'
export default function RadioByCheckBox() {
    const [curData, setCurData] = useState('')
    const [options, setOptions] = useState([
        {
            label:'苹果',
            value:'apple'
        },
        {
            label:'香蕉',
            value:'banana'
        },
        {
            label:'梨',
            value:'pare'
        }
    ])
    
    const getCheckData = (value,label)=>{
        setCurData(value+label)
    }
    return (
        <div>
            <h1>当前选中的值：{curData}</h1>
            <Radios options = {options} changeCondation = {getCheckData} />
        </div>
    )
}
