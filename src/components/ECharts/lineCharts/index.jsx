import React, { useEffect,useState } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/markPoint'
import './index.less'
export default function  Index(props) {
    const [rf, setrf] = useState(
        {}
    )
    const {lineId,option} = props;
    useEffect(() => {
        initChart()
    })
    const initChart= () => {
        let myChart = echarts.getInstanceByDom(document.getElementById(lineId));
        if( myChart === undefined){
            myChart = echarts.init(document.getElementById(lineId));
        }
        // 绘制图表，option设置图表格式及源数据
        myChart.setOption(option);
    }
    return (
        <div id={lineId} style={{ width: '100%', height: '100%'}}></div>
    )
}
