let fruits={ a: "apple", b: "banana", c: "kiwi" }
let ans;
let count=0;
Object.keys(fruits).forEach((key)=>{
    if(fruits[key].length>count){
        count=fruits[key].length
        ans=fruits[key]
    }
})

console.log(ans)