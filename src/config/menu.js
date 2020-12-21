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