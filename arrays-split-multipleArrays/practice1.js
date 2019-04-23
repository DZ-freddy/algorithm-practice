/**
 * Created by Administrator on 2019/4/23.
 */
let arr = [1,2,3,4,5,6,7,8,9],
    newArr = [];
for(let i = 0,len = arr.length; i<len; i+=3){
    newArr.push(arr.slice(i,i+3));
}

console.log(newArr);