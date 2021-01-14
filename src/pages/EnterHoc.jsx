import React from 'react'
import withEnter from '../components/widthEnterHoc'
import {Input ,Select} from 'antd'
function EnterHoc(props) {
    return (
        <div style={
            {
                width:500,
                margin:'0 auto'
            }
        }>
            <Input className='focus-dom'></Input>
            <Input className='focus-dom'></Input>
            <Input className='focus-dom'></Input>
            <Select defaultValue={1} className='focus-dom'>
                <Select.Option value={1}>
                    测试1
                </Select.Option>
                <Select.Option  value={2}>
                    测试2
                </Select.Option>
                <Select.Option  value={3}>
                    测试3
                </Select.Option>
            </Select>
            <Select defaultValue={1} className='focus-dom'>
                <Select.Option value={1}>
                    苹果
                </Select.Option>
                <Select.Option  value={2}>
                    香蕉
                </Select.Option>
                <Select.Option  value={3}>
                    栗子
                </Select.Option>
            </Select>
        </div>
    )
}

export default withEnter(EnterHoc,'.focus-dom')