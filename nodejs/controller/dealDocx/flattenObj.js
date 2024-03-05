function flattenObj(obj,rootObj={}){
    //当对象为空时，直接返回
    if (Object.keys(obj).length===0) return
    //对象不为空，进行遍历
    for (const objKey in obj) {

        //当属性值不为对象时，直接对根对象设置
        if (obj[objKey].constructor !== Object){
            Object.defineProperty(rootObj,objKey,{
                value:obj[objKey],
                enumerable:true,
                writable:true
            })
        } else {
                flattenObj(obj[objKey],rootObj)
        }


    }

}
module.exports=flattenObj