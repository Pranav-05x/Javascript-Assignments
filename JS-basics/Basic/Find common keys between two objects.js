let num1={ a: 1, b: 2, c: 3 }
let num2= { b: 4, c: 5, d: 6 }

let arr=[];

Object.keys(num1).forEach(function(key){
    if(num2[key]){
        arr.push(key)
    }
})

console.log(arr)
    
