import React from 'react'
import PieEchart from '../components/ECharts/pieCharts'
import {EchartOneOption,menuArr,testOptions} from '../config/menu'

export default function echartsTest() {
    return (
        <div>
            <div className="pie-one" style={{width:200,height:250}}>
                <PieEchart 
                boxId = 'PieOne' 
                rightMsgArr = {[1,2,3,4]}
                title = '你好我好大家好'
                option ={dealOption()}
                isHideright = {true}
                 />
            </div>
        </div>
    )
}
const needData = {
    totoal:200,
}
function dealOption(){

    return {
        title: {
            show: true,
            text: "入径总人数", //主标题
            subtext:`200{a|人}` , //副标题
            left: "48%",
            top: "35%", 
            textStyle: { //设置主标题的 样式
              textAlign: "center",
              color: "#768C8C",
              fontSize: 12
            },
            subtextStyle: { //设置副标题的样式
              textAlign: "center",
              color: "#000",
              fontSize: 24,
              fontWeight: 600,
              rich:{
                  a:{
                    color: "#768C8C",
                    fontSize: 12 
                  }
              }
            },
            textAlign:'center'
          },
        tooltip: {
            trigger: 'item',
            formatter: '{b} <br> {c}人 ({d}%)',
            show:true,
            backgroundColor:'rgba(0,0,0,0.7)',
            textStyle:{
                color:'#fff'
            }
        },
        series: [
            {
                name: '入径总人数',
                type: 'pie',
                radius: ['50%', '80%'],
                center: ['50%', '50%'],
                itemStyle: {
                    normal: {
                    color: function(params) {
                            //自定义颜色
                            var colorList = [
                               '#E76C6C','#77D286', '#4DB3BD'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data:[{
                    value:203,name:'中止人数'
                },{
                    value:123,name:'完成人数'
                },{
                    value:123,name:'执行中人数'
                }],
                label: {
                    normal: {
                        show: true,
                        position: "center", //文字显示在中间
                        align: "center", 
                        verticalAlign: "middle",
                        textStyle: {
                          //设置文字样式
                          fontSize: "0"
                        }
                      },
                },
            }
        ]
    }
}
