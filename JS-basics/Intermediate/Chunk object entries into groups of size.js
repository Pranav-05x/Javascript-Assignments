let nums={ a: 1, b: 2, c: 3, d: 4 }
let size=2

let result=[]
let arr=[]

Object.keys(nums).forEach((key)=>{
    arr.push([key,nums[key]])
    if(arr.length==size){
      result.push(arr)
      arr=[]
    }
    
})

console.log(result)