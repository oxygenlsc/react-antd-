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
export const bindAndCancelClickMethod = (selectStr,placeNname,setcuri,isbind) =>{
    const changes = Array.from(document.querySelectorAll(selectStr)) ;
    if(isbind){
        console.log(123);
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
