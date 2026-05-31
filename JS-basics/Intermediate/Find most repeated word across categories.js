let market={ fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }

let result={}

Object.keys(market).forEach((food)=>{
    for(let i=0;i<market[food].length;i++){
        if(result[market[food][i]]){
            result[market[food][i]]++;
        }
        else{
            result[market[food][i]]=1;
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

console.log(ans)