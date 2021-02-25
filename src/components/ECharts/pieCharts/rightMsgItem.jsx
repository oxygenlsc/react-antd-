import React from 'react'
import './index'
/**
 * @param author {黎思成}
 * @param {*
 * spotColor:传入前面的颜色 String,
 * isbolid:第一行字体是否加粗 boolean,
 * lineOneText:第一行文字 String,
 * lineTwoText:第二行文字 String,
 * lineTwoInnerText:第二行内嵌文字 String,
 * } props 
 * @returns 
 */
export default function RightMsgItem(props) {
    return (
        <div className = 'right-item-content'>
            <div className="item-spot"
                style={{
                    backgroundColor:`${props.spotColor}`
                }}
            ></div>
            <div className="right-msg-detail">
                <div style={{
                    fontSize:'12px',
                    textAlign:'left',
                    color:`${props.isbolid?'#000':'#768C8C'}`,
                    fontWeight:`${props.isbolid?'bold':'normal'}`,
                }}>{props.lineOneText}</div>
                <div className='line-two'>{props.lineTwoText}
                    <span style={{
                    fontSize:'12px',
                    color:`#768C8C`,
                    marginLeft:5,
                    textAlign:'left',
                }}>{props.lineTwoInnerText}</span>
                </div>
            </div>
        </div>
    )
}
