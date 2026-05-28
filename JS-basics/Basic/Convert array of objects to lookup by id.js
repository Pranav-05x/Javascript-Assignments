let arr=[{ id: 1, name: "A" }, { id: 2, name: "B" }]

let result={}
arr.forEach(function(person){
    result[person.id]=person
})

console.log(result)