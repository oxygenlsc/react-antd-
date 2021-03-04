import React,{useLayoutEffect,useState,useEffect,useRef} from 'react'

export default function Index6() {
    const refs = useRef();
    const [n, setn] = useState(10000000)
    useEffect(() => {
        refs.current.innerText = Math.random().toFixed(2)
    })
    // useLayoutEffect(() => {
    //     refs.current.innerText = Math.random().toFixed(2)
    // })
    return (
        <div>
          <h1 ref = {refs}>{n}</h1>  
          <button onClick = {()=>{
              setn(n+1)
          }}>
              +
          </button>
        </div>
    )
}

//useEffect 是在运行浏览器渲染完成后，用户看到新的渲染结果以后
