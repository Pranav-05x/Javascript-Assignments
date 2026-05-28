let nums={ a: 10, b: 50, c: 20 }

let largest=0;

let ans;

Object.keys(nums).forEach(function(key){
      if(nums[key]>largest){
        largest=nums[key];
        ans=key;
      }
})
console.log(ans)