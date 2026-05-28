let val={ a: 0, b: null, c: "hello", d: undefined, e: 5 }

let result={}

Object.keys(val).forEach((key)=>{
    if(val[key]){
        result[key]=val[key]
    }
})

console.log(result)