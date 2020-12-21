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
