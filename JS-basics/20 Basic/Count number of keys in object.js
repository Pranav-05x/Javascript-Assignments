let nums={ a: 1, b: 2, c: 3, d: 4 }

let count=0
Object.keys(nums).forEach(function(key){
    count++;
})

console.log(count)