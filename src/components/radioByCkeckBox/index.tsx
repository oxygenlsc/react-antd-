import React, { Component } from 'react'
import {Checkbox  } from 'antd';
import './index.less';
export default class MyRadios extends Component {
    state={
        checkedList:[],
    }
    CheckBoxsChange = (e)=>{
        let newarr = e.filter(el=>el!==this.state.checkedList[0]);
        const {options} = this.props;
        this.setState({
            checkedList:newarr
        })
        let CheckObj =  options.find(el=>el.value==newarr[0])
        this.props.changeCondation(newarr[0]?newarr[0]:'',CheckObj?CheckObj.label:'')
    }
    render() {
        const {options} = this.props;
        return (
             <Checkbox.Group options={options} onChange={this.CheckBoxsChange} value = {this.state.checkedList} />
        )
    }
}
