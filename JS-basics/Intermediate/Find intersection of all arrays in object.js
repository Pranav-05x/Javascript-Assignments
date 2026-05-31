let nums={ a: [1,2,3], b: [2,3,4], c: [3,4,5] }

let result={}

Object.keys(nums).forEach((key)=>{
    for(let i=0;i<nums[key].length;i++){
        if(result[nums[key][i]]){
            result[nums[key][i]]++;
        }
        else{
            result[nums[key][i]]=1;
        }
    }
})

let max=0
let ans;

Object.keys(result).forEach((key)=>{
     if(result[key]>max){
        max=result[key];
        ans=key;
     }
})

console.log(Number(ans))