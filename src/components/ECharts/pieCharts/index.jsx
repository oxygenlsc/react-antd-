import React,{useState,useEffect} from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';
import './index.less'
import RightMsgItem from './rightMsgItem'
/**
 * 
 * @param {
 * 
 * } props 
 * @returns 
 */

/**
 * 
 * {
 *      title:{
 *              text:'入径总人数',
 *              subtext:`200{a|人}`,
 *              
 *      }
 *      data:[{
                    value:203,name:'中止人数'
                },{
                    value:123,name:'完成人数'
                },{
                    value:123,name:'执行中人数'
                }],

        colorList:['#E76C6C','#77D286', '#4DB3BD'
                            ];
 * 
 * }
 */
export default function  Index(props) {
    const {title,rightMsgArr,isHideright} = props
    useEffect(() => {
        initChart()
    })

    const initChart= () => {
        let option = props.option;
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.getInstanceByDom(document.getElementById(props.boxId));
        if( myChart === undefined){
            myChart = echarts.init(document.getElementById(props.boxId));
        }
        // 绘制图表，option设置图表格式及源数据
        myChart.setOption(option);
    }
    return (
        <div className = 'pie-content'>
            <div className="title">{title}</div>
            <div className="ec-box">
                <div id={props.boxId} style={{ width: '200px', height: '200px'}}></div>
                {  !isHideright?
                    <div className="right-detail">
                    {
                        rightMsgArr?.map((el,i)=> <RightMsgItem 
                            key = {i}
                            isbolid
                            spotColor='blue' 
                            lineOneText = {'第一次dddddddd'} 
                            lineTwoText = {'2077777'}
                            lineTwoInnerText = {'50%'}
                            />)
                    }
                </div>:null}
            </div>
        </div>
    )

}

