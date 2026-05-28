let bank=[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

let result={}

bank.forEach((person)=>{

    if(result[person.user]){
        result[person.user]+=person.amount
    }
    else{
        result[person.user]=person.amount
    }
})
console.log(result)