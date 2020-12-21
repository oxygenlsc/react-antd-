/**
 * 
 * @param {回车事件源} e 
 * @param {获取dom的css选择器} selectStr 
 * @param {当前的位置名字的字符串，state里面自己写的暂存的} placeNname 
 * @param {当前暂存位置的数值} curi 
 * @param {this.setState} setcuri 
 */

export const EnterMethod = (e,selectStr,placeNname,curi,setcuri) => {
    if (e.keyCode == 13) {
        const changes = document.querySelectorAll(selectStr);
        if (changes.length == 0) {
            return
        }
        if (changes[curi]?.tagName == 'DIV') {
            if (curi > changes.length - 1){
                if (e.srcElement.getAttribute('autocomplete') == 'off') {
                    changes[0].click()
                    setcuri({[placeNname]:0})
                } else {
                    changes[1].focus()
                    setcuri({[placeNname]:1})
                }
                return
            }
            if (e.srcElement.getAttribute('autocomplete') == 'off') {
                changes[curi + 2].focus()
                setcuri({[placeNname]:curi + 2})
            } else {
                changes[curi].click()
                setcuri({[placeNname]:curi+1})
            }
            
        } else {
            console.log(123);
            if (curi > changes.length - 1){
                changes[0].focus()
                changes[0].click()
                setcuri({[placeNname]:1})
                return
            }
            changes[curi].focus()
            setcuri({[placeNname]:curi + 1})
        }
    }
}
/**
 * 
 * @param {获取dom的css选择器} selectStr 
 * @param {当前的位置名字的字符串，state里面自己写的暂存的} placeNname 
 * @param {在类组件中是this.setState,函数组件中是statehooks} setcuri 
 * @param {boolean值，true代表绑定事件，false代表取消事件} isbind 
 */
export const bindAndCancelClickMethod = (selectStr,placeNname,setcuri,isbind) =>{
    const changes = Array.from(document.querySelectorAll(selectStr)) ;
    if(isbind){
        changes.forEach((el,i)=>{
            el.onclick = ()=>{
                if(i>=changes.length-1){
                    setcuri({[placeNname]:0})
                    return
                }
                setcuri({[placeNname]:i+1})
            }
        })
    }else{
        changes.forEach((el,i)=>{
            el.onclick = null
        })
    }
   
}
