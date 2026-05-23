let alpha= { a: "x", b: "y", c: "z" }

let result={}
  
Object.keys(alpha).forEach(function(key){
    result[alpha[key]]=key;
})
console.log(result)

