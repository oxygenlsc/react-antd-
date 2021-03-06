/**
 * author：黎思成
 * 1.表格可拉伸使用方法 导出{ResizeableTitle,columns}这2个方法具体写法请看下面demo（需要把表头放到state里且表头width必须为number类型）
 * 2.回车注册事件导出{EnterMethod,bindAndCancelClickMethod}这2个方法
 * （在需要的select或者input 写上共同的类名以便之后获取，我这里写的是'focus-dom'，
 * 且适用的场景是只有input和select antd组件的情况下）具体写法请看下面
 */
import React,{useState,useEffect} from 'react'
import {Table} from 'antd'
import {tableColumsOne,tableOneMockData} from '../config/tableTest'
import {ResizeableTitle,columns} from '../components/tableFlex/flexForFuncComp/CloumsFlexible'
import {EnterMethod,bindAndCancelClickMethod} from '../components/enterDown/enterDownForFunc/index'
import './index.less'
export default function   TableTestForFunc() {
    const [curi, setcuri] = useState(0);
    const [cloums, setcloums] = useState([...tableColumsOne])
    useEffect(() => {
        bindAndCancelClickMethod('#md-container .focus-dom',setcuri,true)
        return () => {
            bindAndCancelClickMethod('#md-container .focus-dom',curi,setcuri,false)
        }
    }, [])
    useEffect(() => {
        window.onkeydown =(e)=> EnterMethod(e,'#md-container .focus-dom',curi,setcuri)
        return () => {
            window.removeEventListener('keydown', EnterMethod)
        }
    })
    const components = {
        header: {
            cell: ResizeableTitle,
          },
      }
    const flexCloum = columns( setcloums,cloums)
    return (
        <div className='TestBox'>
            <div className="tableBox">
            <p style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>函数组件中可拉长表头demo以及回车切换焦点的demo</p>
                <Table
                 id = 'md-container'
                 columns = {flexCloum}
                 dataSource = {
                    tableOneMockData
                }
                components={components}
                bordered
                ></Table>
            </div>
        </div>
    )
}
