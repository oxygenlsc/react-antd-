import React, { Component } from 'react'
import {Table} from 'antd'
import {tableColumsOne,tableOneMockData} from '../config/tableTest'
import {ResizeableTitle,columns} from '@/components/tableFlex/flexForClassComp/CloumsFlexible.tsx'
import {EnterMethod,bindAndCancelClickMethod} from '../components/enterDown/enterDownForClass/index'
import './index.less'
export default class tableTest extends Component {
    state = {
        myCloum :[...tableColumsOne],
        curi:0
    }
    components = {
        header: {
            cell: ResizeableTitle,
        },
    };
    componentDidMount(){
        window.onkeydown =(e)=> EnterMethod(e,'#md-container .focus-dom','curi',this.state.curi,this.setState.bind(this))
        bindAndCancelClickMethod('#md-container .focus-dom','curi',this.setState.bind(this),true)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', EnterMethod)
        bindAndCancelClickMethod('#md-container .focus-dom','curi',this.setState.bind(this),false)
    }
    render() {
        const columnsFlex = columns(this.state, 'myCloum', this)
        return (
            <div className='TestBox'>
                <div className="tableBox">
                <p style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>类组件中可拉长表头demo</p>
                <Table
                id = 'md-container'
                style = {{
                    width:'100%'
                }}
                components={this.components}
                dataSource = {tableOneMockData}
                bordered
                columns = {columnsFlex}
                >
                </Table>
                </div>
            </div>
        )
    }
}
