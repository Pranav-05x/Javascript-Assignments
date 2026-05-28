let person={ name: "alice", city: "delhi" }

let result={}

Object.keys(person).forEach((key)=>{
    result[key]=person[key][0].toUpperCase()+person[key].slice(1)
})

console.log(result)