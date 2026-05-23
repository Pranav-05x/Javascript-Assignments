let person={ name: "Rahul", age: 23, city: "Noida" }

let keys= ["name","city"]

let result={}

keys.forEach(function(selectedkey){
    result[selectedkey]=person[selectedkey]
})

console.log(result)