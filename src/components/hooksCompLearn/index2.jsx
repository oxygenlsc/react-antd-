import React,{useState,useCallback,useMemo} from 'react'

class  Test extends React.PureComponent {

    render(){
        console.log('test Render')
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick = {this.props.onClick}>改变文本</button>
        </div>
    }
}
export default function Index(props) {
    console.log('index render');
    const [txt, settxt] = useState(123)
    const [n, setn] = useState(0)
  const handleClick =   useMemo(
        () => {
            return ()=>{
                settxt(123)

            }
        },[])

    return (
        <div>
            {/* 函数的地址每次都会发生变化，导致子组件发生更新 */}
            {/* <Test text = {txt} onClick={()=>{
                settxt(1)
            }}/> */}
             <Test text = {txt} onClick={handleClick}/>
            <input type="number" value = {n} onChange = {(e)=>{
                setn(e.target.value)
            }}/>
        </div>
    )
}
