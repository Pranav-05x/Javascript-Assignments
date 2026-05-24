let nums={ a: 3, b: 1, c: 2 }

let array=[]

Object.keys(nums).forEach(function(key){
      array.push([key,nums[key]])
})
array.sort((a,b)=>a[1]-b[1])

console.log(array)