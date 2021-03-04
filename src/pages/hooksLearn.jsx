import React, { useContext } from 'react'
import HooksLearn1 from '../components/hooksCompLearn/index1'
import HooksLearn2 from '../components/hooksCompLearn/index2'
import HooksLearn3 from '../components/hooksCompLearn/index3'
import HooksLearn4 from '../components/hooksCompLearn/index4'
import HooksLearn5 from '../components/hooksCompLearn/index5'
import HooksLearn6 from '../components/hooksCompLearn/index6'
import HooksLearn7 from '../components/hooksCompLearn/index7'



const ctx = React.createContext()
function ContextTest(){
    const value = useContext(ctx)
    return <h1>上下文的值{value}</h1>
}
export default function hooksLearn() {
    return (
        <div>
            <ctx.Provider value = 'abc'>
                {/* <HooksLearn1/> */}
                {/* <HooksLearn2/> */}
                {/* <HooksLearn3/> */}
                {/* <HooksLearn4/> */}
                {/* <HooksLearn5/> */}
                {/* <HooksLearn6/> */}
                {/* <HooksLearn7/> */}


                <ContextTest/>
            </ctx.Provider>
            
        </div>
    )
}


