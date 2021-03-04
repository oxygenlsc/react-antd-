import React,{useImperativeHandle,useRef} from 'react'

// class Test extends  React.Component {
//     method(){
//         console.log('test method');
//     }
//     render(){
//         return <h1>TEST comp</h1>
//     }
// }

function Test(props,ref) {
    useImperativeHandle(ref,()=>{
        //如果不给依赖项着每次运行函数组件都会调用该方法
        //如果使用了依赖项，则第一次调用后会进行缓存
        //相当于给ref的current赋值为1
        return {
            method(){
                console.log('test method');
            }
        }
    },[])
        return <h1>TEST comp</h1>
}

const TestW= React.forwardRef(Test)
export default function Index() {
 const testRef =   useRef()
    return (
        <div>
           {/* <Test ref = {testRef}/> 

           <button onClick = {()=>{
               testRef.current.method()
           }}>点击调用Test组件的method方法</button> */}

            <TestW ref = {testRef}/> 

           <button onClick = {()=>{
               testRef.current.method()
            // console.log(testRef.current);
           }}>点击调用Test组件的method方法</button>
        </div>
    )
}
