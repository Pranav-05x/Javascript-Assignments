let person={ name: "Alice", age: 25 }

let ans=""
let keys=Object.keys(person);

keys.forEach((key,index)=>{
   ans+=`${key}=${person[key]}`

   if (index !== keys.length - 1) {
        ans += "&";
    }
    
})
console.log(ans)