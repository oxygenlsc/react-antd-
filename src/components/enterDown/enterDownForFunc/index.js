export const EnterMethod = (e,selectStr,curi,setcuri) => {
    if (e.keyCode == 13) {
        const changes = document.querySelectorAll(selectStr);
        if (changes.length == 0) {
            return
        }
        if (changes[curi]?.tagName == 'DIV') {
            if (curi > changes.length - 1){
                if (e.srcElement.getAttribute('autocomplete') == 'off') {
                    changes[0].click()
                    setcuri(0)
                } else {
                    changes[1].focus()
                    setcuri(1)
                }
                return
            }
            if (e.srcElement.getAttribute('autocomplete') == 'off') {
                changes[curi + 2].focus()
                setcuri(curi + 2)
            } else {
                changes[curi].click()
                setcuri(curi+1)
            }
            
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
