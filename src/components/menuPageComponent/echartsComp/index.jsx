import React, { useEffect } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';

export default function  Index(props) {
    useEffect(() => {
        initChart()
    })
    const initChart= () => {
        let option = props.option;
        console.log(option,'option');
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.getInstanceByDom(document.getElementById('main'));
        if( myChart === undefined){
            myChart = echarts.init(document.getElementById('main'));
        }
        // 绘制图表，option设置图表格式及源数据
        myChart.setOption(option);
    }
    return (
        <div id="main" style={{ width: '100%', height: '100%'}}></div>
    )
}
