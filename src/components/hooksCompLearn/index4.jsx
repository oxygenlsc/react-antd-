import React,{useRef,useState}from 'react'
window.arr = [];
export default function Index(props) {
    const [n, setn] = useState(0)
    // const inpRef = React.createRef();
    // window.arr.push(inpRef);
    const inpRef = useRef();
    window.arr.push(inpRef);

    return (
        <div>
            <input type="text" ref={inpRef} />
            <button onClick={()=>{
                console.log(inpRef.current);
            }}>得到Input的值</button>

            <input type="number" value={n} onChange = {e=>{
                setn(e.target.value)
            }} />
        </div>
    )
}
