import React, { Component,useEffect,useState } from 'react'
import {EnterMethod,bindAndCancelClickMethod} from './enterDownForFunc'
export default function withEnterHOC(WrappedComponent,className) {
    return function withEnterHOC(props){
        const [curi, setcuri] = useState(0);
        const queryStr = `#enterWrapper  ${className}`
        useEffect(() => {
            bindAndCancelClickMethod(queryStr,setcuri,true)
            return () => {
                bindAndCancelClickMethod(queryStr,curi,setcuri,false)
            }
        })
        useEffect(() => {
            window.onkeydown =(e)=> EnterMethod(e,queryStr,curi,setcuri)
            return () => { 
                window.removeEventListener('keydown', EnterMethod)
            }
        })
        const newProps = Object.assign({}, props)
        return <div id='enterWrapper'><WrappedComponent {...newProps} /></div>
    }
}
