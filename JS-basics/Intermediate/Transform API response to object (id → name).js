let user=[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

let result={}

user.forEach((person)=>{
    result[person.id]=person.name
})

console.log(result)