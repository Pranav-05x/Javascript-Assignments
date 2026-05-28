let user=[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]

let seen=new Set()

let result=user.filter((person)=>{
    if(seen.has(person.id)){
        return false;
    }

    seen.add(person.id)
    return true;
})

console.log(result)