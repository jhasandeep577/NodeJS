function add(val1,val2){
    return val1+val2;
}
function sub(val1,val2){
    return val1-val2;
}
// module.exports='piyush'
// module.exports=add;
// module.exports=sub;   // It is overrriding exports
module.exports={
    addFn:add,
    subFn:sub
}
// exports.sub2=(a,b)=>a-b;
// exports.add1=(a,b)=>a+b;