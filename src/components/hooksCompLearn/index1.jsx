import React,{useEffect,useState} from 'react'
window.timer =  null;//计时器id
export default function Index() {
    console.log(123);
    const [num, setnum] = useState(0)
    const [point, setpoint] = useState({x:0,y:0})
    const [ishow, setishow] = useState(true);
    //改变页面标题
    useEffect(() => {
        document.title = `计数器：${num}`;

        setTimeout(() => {
                console.log(num);
        }, 5000);
    })
    /**
     * 1:该函数运行的时间点是在页面完成真实的ui渲染之后，因此它的执行是异步的
    并且不会阻塞浏览器
        1. 与类组件中componentDidMount和componentDidUpdate的区别
            类中是在更改了真实DOM，但用户还没有看到UI更新，同步的
            但是useE... 中的辅助用函数，是更改了真实DOM，并且用户已经看到了UI更新，异步的。
     */
    /**
     * effect hook 用于在函数组件中处理副作用
     * 副作用：1 ajax  计时器   其他异步操作  更改真实DOM对象 本地存储
     * 因为之前在类组件中官方说过了那些生命周期可以处理副作用那些不可以，但是总会有人乱用
     * 所以出现了这个effect hook
     */
    return (
        <div>
            result:{num}
            <br/>
            <button onClick={()=>{
                setnum(num+1)
            }}>+</button>
            <input type="number" value ={point.x} onChange = {(e)=>{
                setpoint({
                    ...point,
                    x:parseInt(e.target.value) 
                })
            }}/>
            <input type="number" value ={point.y} onChange = {(e)=>{
                setpoint({
                    ...point,
                    y:parseInt(e.target.value) 
                })
            }}/>
            {
                ishow? <MovableBlock left={point.x} top={point.y}/>:null
            }
            <button onClick={()=>{
                setishow(false)
            }}>guanbi</button>
        </div>
    )
}

/**
 * 一个可移动的块，该组件每次渲染完成后始终从0，0坐标在
 * 1s内移动到目标坐标
 * @param {*} props
 * props.left 要移动到目标点的横坐标
 * props.top,要移动到目标的纵坐标
 */
    let ref= React.createRef();

  function MovableBlock(props){
    useEffect(() => {
     const div = ref.current
     let curTimes = 0;//当前移动的次数
     const disx = props.left / 100; //横坐标坐标上每次移动的距离
     const disy = props.top / 100; //纵坐标每次移动的距离
    // clearInterval(window.timer)
    window.timer = setInterval(()=>{
            curTimes++;
            const newLeft = curTimes*disx;
            const newTop = curTimes*disy;
            div.style.left = newLeft +'px';
            div.style.top = newTop + 'px';
            if(curTimes === 100){
                clearInterval(window.timer);
            }
     },10)

    
     return ()=>{
        clearInterval(window.timer);
     }
    },[props.left,props.top])
    return <div
        ref = {ref}
        onClick = {()=>{
            clearInterval(3)
        }}
        style = {{
            width:100,
            height:100,
            position:'fixed',
            backgroundColor:'red'
        }}
    ></div>
 }