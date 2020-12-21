import {Input,Select} from 'antd'
const {Option} = Select
export const tableColumsOne  = [
    {
        title: '药品代码',
        dataIndex: 'drcode',
        key: 'drcode',
        ellipsis: true,
        width: 150,
        render:(text)=>{
            return <Select  className='focus-dom' style = {{width:'100%'}}>
                <Option key = {1} value = {1}> 牛黄1</Option>
                <Option key = {2} value = {2}> 牛黄2</Option>
                <Option key = {3} value = {3}> 牛黄3</Option>
                <Option key = {4} value = {4}> 牛黄4</Option>
            </Select>
        }
    },
    {
        title: '药品名称',
        dataIndex: 'drname',
        key: 'drname',
        ellipsis: true,
        width: 160,
        render:(text)=>{
            return <Select  className='focus-dom' style = {{width:'100%'}}>
                <Option key = {1} value = {1}> 牛黄1</Option>
                <Option key = {2} value = {2}> 牛黄2</Option>
                <Option key = {3} value = {3}> 牛黄3</Option>
                <Option key = {4} value = {4}> 牛黄4</Option>
            </Select>
        }
    },
    {
        title: '申请数(大)',
        dataIndex: 'target_num_l',
        editable: true,
        ellipsis: true,
        width: 80,
        render:(text)=>{
            return <Input  className='focus-dom' style = {{width:'100%'}} defaultValue={text} ></Input>
        }
    },
    {
        title: '单位(大)',
        dataIndex: 'packunit_name',
        ellipsis: true,
        width: 70,
        render:(text)=>{
            return <Input  className='focus-dom' style = {{width:'100%'}} defaultValue={text} ></Input>
        }
    },
    {
        title: '申请数(小)',
        dataIndex: 'target_num_s',
        editable: true,
        ellipsis: true,
        width: 80,
    },
    {
        title: '规格',
        dataIndex: 'pack_spec',
        ellipsis: true,
        width: 100,
    },
    {
        title: '生产厂家',
        dataIndex: 'manf',
        ellipsis: true,
        width: 200,
        render:(text)=>{
            return <Select className='focus-dom'  style = {{width:'100%'}}>
                <Option key = {1} value = {1}> 杭州1</Option>
                <Option key = {2} value = {2}> 杭州2</Option>
                <Option key = {3} value = {3}> 杭州3</Option>
                <Option key = {4} value = {4}> 杭州4</Option>
            </Select>
        }
    },
    {
        title: '零售价',
        dataIndex: 'npl',
        ellipsis: true,
        width: 80,
    },
    {
        title: '批号',
        dataIndex: 'batch_number',
        ellipsis: true,
        width: 100,
        render:(text)=>{
            return <Select  className='focus-dom' style = {{width:'100%'}}>
                <Option key = {1} value = {1}> 1</Option>
                <Option key = {2} value = {2}> 2</Option>
                <Option key = {3} value = {3}>3</Option>
                <Option key = {4} value = {4}> 4</Option>
            </Select>
        }
    },
]
export const tableOneMockData = [
    {
        drcode:'012345',
        drname:"牛黄解毒丸",
        target_num_l:123,
        target_num_s:55,
        pack_spec:'大',
        manf:'中国大陆',
        npl:'100',
        batch_number:'abcd'
    },
    {
        drcode:'012345',
        drname:"牛黄解毒丸",
        target_num_l:123,
        target_num_s:55,
        pack_spec:'大',
        manf:'中国大陆',
        npl:'100',
        batch_number:'abcd'
    },
    {
        drcode:'012345',
        drname:"牛黄解毒丸",
        target_num_l:123,
        target_num_s:55,
        pack_spec:'大',
        manf:'中国大陆',
        npl:'100',
        batch_number:'abcd'
    },
    {
        drcode:'012345',
        drname:"牛黄解毒丸",
        target_num_l:123,
        target_num_s:55,
        pack_spec:'大',
        manf:'中国大陆',
        npl:'100',
        batch_number:'abcd'
    }
]