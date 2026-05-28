let roles={ admin:["read","write"], user:["read"], staff: ["write"]}
let checkRole="user"
let action="write"
let ans=false
Object.keys(roles).forEach((key)=>{
    if(key==checkRole){
        for(let i=0;i<roles[key].length;i++){
             if(roles[key][i]==action){
                ans=true
             }
        }
    }
})

console.log(ans)