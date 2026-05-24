let arr=[1,2,3,4,5,6]


let result={}

let evenCount=0;
let oddCount=0;

arr.forEach(function(num){
    if(num%2==0){
       evenCount++
    }
    else{
      oddCount++
    }
})

result.even=evenCount
result.odd=oddCount

console.log(result)