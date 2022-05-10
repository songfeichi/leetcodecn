function deepcopy(obj,hash=new WeakMap()){
    if(obj instanceof Date){
        return new Date(obj)
    }
    if(obj instanceof RegExp){
        return new RegExp(obj)
    }
    if(hash.has(obj)){
        return hash.get()
    }
    let copy=obj instanceof Array?[]:{}
    hash.set(obj,copy)
    for(let i of obj){
        if(obj.hasOwnProperty(i)){
            if(typeof obj[i] ==='object'&& obj[i]!=null){
                copy[i]=deepcopy(obj[i])
            }
            else{
                copy[i]=obj[i]
            }
        }
    }
    return copy
}
var obj={id:1}
obj._self=obj
