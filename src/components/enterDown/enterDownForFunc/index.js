/**
 * 
 * @param {回车事件源} e 
 * @param {获取dom的css选择器} selectStr 
 * @param {当前暂存位置的数值} curi 
 * @param {statehooks} setcuri 
 * 
 * 
 */
export const EnterMethod = (e,selectStr,curi,setcuri) => {
    if (e.keyCode == 13) {
        const changes = document.querySelectorAll(selectStr);
        if (changes.length == 0) {
            return
        }
        if (changes[curi]?.tagName == 'DIV') {
            changes[curi].click()
            setcuri(curi+1)
        } else {
            if (curi > changes.length - 1){
                changes[0].focus()
                changes[0].click()
                setcuri(1)
                return
            }
            changes[curi].focus()
            setcuri(curi + 1)
        }
    }
}
/**
 * 
 * @param {获取dom的css选择器} selectStr 
 * @param {statehooks} setcuri 
 * @param {boolean值，true代表绑定事件，false代表取消事件} isbind 
 */
export const bindAndCancelClickMethod = (selectStr,setcuri,isbind) =>{
    const changes = Array.from(document.querySelectorAll(selectStr)) ;
    if(isbind){
        changes.forEach((el,i)=>{
            console.log(el,'el');
            el.onclick = ()=>{
                if(i>=changes.length-1){
                    setcuri(0)
                    return
                }
                setcuri(i+1)
            }
        })
    }else{
        changes.forEach((el,i)=>{
            el.onclick = null
        })
    }
   
}
