import React,{useState,useEffect, useMemo} from 'react'

function Item(props){
    return <li>{props.value}</li>
}
export default function Index(props) {
    const [range, setrange] = useState({min:1,max:1000});
    const [n,setN] = useState(0);
    const list = useMemo( ()=>{
        const list = [];
        for (let i = range.min; i <= range.max; i++) {
            console.log(1);
            list.push(<Item key = {i} value = {i} ></Item>)
        }
        return list
    }, [range.min,range.max])
    // const list = [];
    // for (let i = range.min; i <= range.max; i++) {
    //     console.log(1);
    //     list.push(<Item key = {i} value = {i} ></Item>)
    // }
    // console.log('zhix');

    return (
        <div>
            <ul>
            {list}
            </ul>
            <input type="number" value = {n} onChange={e=>{
                setN(parseInt(e.target.value))
            }}/>
        </div>
       
    )
}

