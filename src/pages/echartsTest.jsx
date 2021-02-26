import React from 'react'
import PieEchart from '../components/ECharts/pieCharts'
import LineEchart from '../components/ECharts/lineCharts'

export default function echartsTest() {
    const datas = [{
        value:203,name:'中止人数',percent:'10%'
    },{
        value:123,name:'完成人数',percent:'30%'
    },{
        value:123,name:'执行中人数',percent:'70%'
    }]
    const Colors = [
        '#E76C6C','#77D286', '#4DB3BD'
     ]
    const option = dealOption("入径总人数",'人',datas, Colors)
    const rightmsg = dealRightMsg('人',datas, Colors)
    return (
        <div>
            <div className="pie-one" style={{width:340,height:250}}>
                <PieEchart 
                    boxId = 'PieOne' 
                    rightMsgArr = {rightmsg}
                    title = '你好我好大家好'
                    option ={option}
                    isHideright = {false}
                 />
            </div>
            <div className="line-one" style={{width:'100%',height:266}}>
                <LineEchart lineId='LineOne' option ={dealLineOption()}  />
            </div>
        </div>
    )
}
function dealOption(pieName,unit,pieData,pieColor){
    //副标题需要所有的值加起来的数量 定义total
    //副标题需要单位 定义 unit 
    // let pieData = [{
    //     value:203,name:'中止人数'
    // },{
    //     value:123,name:'完成人数'
    // },{
    //     value:123,name:'执行中人数'
    // }]
    // let pieColor = [
    //     '#E76C6C','#77D286', '#4DB3BD'
    //  ];
    let total = 449
    return {
        title: [{
            show: true,
            text: `${pieName}`, //主标题
            subtext:`${total}{a|${unit}}` , //副标题
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
          }],
        tooltip: {
            trigger: 'item',
            formatter: `{b} <br> {c}${unit} ({d}%)`,
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
                            var colorList = pieColor
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: pieData,
                label: {
                    show:true,
                    position: "center", //文字显示在中间
                    align: "center", 
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
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '12',
                        fontWeight: 'bold',
                        formatter :`{a|{b}}\n\n {b|{c}}{a|${unit}}`,
                        rich:{
                            a:{
                                fontWeight:500,
                                color: "#768C8C",
                                fontSize: 12 
                            },
                            b:{
                                textAlign: "center",
                                color: "#000",
                                fontSize: 24,
                                fontWeight: 600,
                            }
                        }
                    }
                },
            }
        ]
    }
}

function dealRightMsg(unit,pieData,pieColor){
    // let pieData = [{
    //     value:8000,name:'入径总数/率',percent:'80%'
    // },{
    //     value:123,name:'完成人数',percent:'30%'
    // },{
    //     value:123,name:'执行中人数',percent:'60%'
    // }]
    // let pieColor = [
    //     '#E76C6C','#77D286', '#4DB3BD'
    //  ];
    pieData = [{ value:8000,name:'入径总数/率',percent:'80%',isbolid:true},...pieData];
    pieColor = ['transparent',...pieColor]
    let newdata = pieData.map((el,i)=>{
        return {
            spotColor:pieColor[i],
            lineOneText:el.name,
            lineTwoText:el.value+unit,
            lineTwoInnerText:el.percent,
            isbolid:el.isbolid?el.isbolid:false
        }
     })
    return newdata
}

function dealLineOption(){
    let xAxisData = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    return {
        title: {
            text: '路径趋势'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['匹配数', '入径数', '完成数', '中止数', '变异数'],
            left:'right'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '匹配数',
                type: 'line',
                // stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210,150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '入径数',
                type: 'line',
                // stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310,150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '完成数',
                type: 'line',
                // stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '中止数',
                type: 'line',
                // stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320,320, 332, 901, 934, 1290, 1330, 1320]
            },
            {
                name: '变异数',
                type: 'line',
                // stack: '总量',
                data: [820, 932, 901, 934, 25, 1330, 1320,320, 332, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
}
