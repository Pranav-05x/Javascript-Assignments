let nums={ a: 20, b: 60, c: 40, d: 90 }

let result={}

Object.keys(nums).forEach(function(key){
    if(nums[key]>50){
        result[key]=nums[key];
    }
})

console.log(result);