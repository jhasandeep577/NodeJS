// const { addFn,subFn }=require('./02Math')
const math=require('./02Math')   //  ./ represents current dir

console.log("Starting Node JS");
//console.log(math);
const val=math.addFn(4,3);
const val2=math.subFn(4,3);
console.log(`Value1=${val}, Value2=${val2}`);