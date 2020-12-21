import React,{useEffect} from 'react'
import './index.less'
import {waterFull,getRandom} from '../../utils/utils'
import {menuArr} from '../../config/menu'

export default function FlowItemBox() {
    useEffect(() => {
        waterFull('menu-item',700,200,3)
    })
    return (
        <ul className='flow-item-box' id='flowItemBox'>
            {menuArr.map(el=>{
                return  <li className='menu-item' style = {{width:200,
                    backgroundColor:`rgba(${getRandom(100,225)} ,${getRandom(100,225)} ,${getRandom(100,225)},${getRandom(0.5,1)})`
                }}>
                        <b style={{
                            textAlign:'left'
                        }} >标题：{el.title}</b>
                        <span style={{
                            textAlign:'left'
                        }}><b>作者：</b>{el.author}</span>
                        <span style={{
                            textAlign:'left'
                        }}><b>描述:</b>{el.des}</span>
                       
                    </li>
            })}
           
        </ul>
    )
}
