let market=[
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]
let result={}
market.forEach((food)=>{
    if(result[food.category]){
        result[food.category].push(food.id)
    }
    else{
       result[food.category]=[food.id]
    }
})

console.log(result)