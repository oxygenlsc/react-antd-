export const menuArr = [
    {
        title:'类组件中antd的Table组件的表头拉伸和回车事件封装demo',
        url:'/tableTestForClass',
        author:'黎思成',
        time:'2020/12/18',
        des:`封装了一个是表头拖拉的js（对应components/tableFlex中的文件一个是争对函数组件的一个是争对类组件的写法）
        和在表/格中只有输入框和下拉框的回车切换焦点的函数（对应componets/enterDown中的文件一个是争对函数组件的一个是争对类组件的写法）`
    },
    {
        title:'函数组件中antd的Table组件的表头拉伸和回车事件封装demo',
        url:'/tableTestForFunc',
        author:'黎思成',
        time:'2020/12/18',
        des:`封装了一个是表头拖拉的js（对应components/tableFlex中的文件一个是争对函数组件的一个是争对类组件的写法）
        和在表格中只有输入框和下拉框的回车切换焦点的函数（对应componets/enterDown中的文件一个是争对函数组件的一个是争对类组件的写法）`
    },
    {
        title:'使用多选框实现单选框',
        url:'/RadioByCheckBox',
        author:'黎思成',
        time:'2021/1/14',
        des:`为啥子会有这个想法喃，是因为antd的radio单选框无法把选中的取消掉，或者就是我没有找到方法，
        所以使用多选框去实现 `
    },
    {
        title:'基于前两个案例的方法实现了一个回车事件的高阶组件',
        url:'/EnterHoc',
        author:'黎思成',
        time:'2021/1/14',
        des:`产生原因还是觉得上面两个的方法的使用还是有一些麻烦所以就封装了一个高级组件以简化用户的使用,需要传入2个参数一个是组件，第二个是类名 `
    },
    {
        title:'echarts测试练手',
        url:'/echartsTest',
        author:'黎思成',
        time:'2021/2/25',
        des:`之后要自己写临床路径监控页面，因为有大量的图表所以就先提前来实验一下`
    },
    {
        title:'hooks教学demo',
        url:'/hooksLearn',
        author:'黎思成',
        time:'2021/3/3',
        des:`领导让我带学妹把hooks搞会，写的demo`
    },
]

export const EchartOneOption = (menuArr)=>{
    let peopleArr = menuArr.map(el=>el.author);
    let noSomePeopleArr = uniqueArr([...peopleArr]);
    let authorData = [];
    noSomePeopleArr.forEach(item => {
        authorData.push({
            value:0,
            name:item
        })
    });
    authorData.forEach(item=>{
        peopleArr.forEach(el=>{
            if(item.name==el){
                item.value++
            }
        })
    })
   
    let  option = {
        title: {
            text: 'demo发布人及个数比例',
            subtext: '饼图统计',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} ： {b} <br/> 发布demo {c} 个 ({d}%)',
            show:true
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: noSomePeopleArr
        },
        series: [
            {
                name: 'demo作者',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data:authorData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return option
}
function uniqueArr(arr){
    return Array.from(new Set(arr))
}




export const testOptions = ( {
    title: {
        show: true,
        text: "企业数量", //主标题
        subtext: 500, //副标题：企业数量值，此处用标题方式来显示
        left: "30%",
        top: "40%", 
        z: 0,
        zlevel: 100,
        textStyle: { //设置主标题的 样式
          textAlign: "center",
          color: "rgba(145,213,255,0.85)",
          fontSize: 14
        },
        subtextStyle: { //设置副标题的样式
          textAlign: "center",
          color: "#000",
          fontSize: 30,
          fontWeight: 600
        }
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
    // legend: {
    //     show:false,
    //     orient: 'vertical',
    //     align: 'left',
    //     right:'0', 
    //     bottom:'25%',
    //     icon:'circle',
    //     // padding:50,
    //     data: [{
    //         value:203,name:'中止人数'
    //     },{
    //         value:123,name:'完成人数'
    //     },{
    //         value:123,name:'执行中人数'
    //     }]
    // },
    series: [
        {
            name: '入径总人数',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['35%', '50%'],
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
})

