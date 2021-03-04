import React,{useState,useEffect,useDebugValue} from 'react'

function useTest(){
    const [student, setstudent] = useState([]);
    useDebugValue('学生集合')
    return student;
}

export default function Index7() {
    const [n, setn] = useState(0)
    useEffect(() => {
       console.log('effect');
    }, [])
    useTest();
    return (
        <div>
            {n}
        </div>
    )
}
