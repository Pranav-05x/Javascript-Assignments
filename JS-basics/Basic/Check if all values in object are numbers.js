let ob={ a: 1, b: "hello", c: 3 }
let allNumbers=true

for(let key of Object.keys(ob)){
    if(typeof ob[key]!=='number'){
        allNumbers=false
        break
    }
}
console.log(allNumbers)