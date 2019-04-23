/**
 * Created by Administrator on 2019/4/23.
 */
let arr = [1,2,3,4,5,6,7,8,9],
    newArr = [];
arr.forEach((item,index)=>{
    let outIdx = parseInt(index/3),
    innerIdx = parseInt(index%3);
    if(newArr[outIdx]){
        newArr[outIdx][innerIdx] = item;
    }else{
        newArr[outIdx] = [];
        newArr[outIdx][innerIdx] = item;
    }
});

console.log(newArr);