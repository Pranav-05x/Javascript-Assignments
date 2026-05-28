let mall=[
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

let result={}

mall.forEach((product)=>{
    if(result[product.category]){
        result[product.category]+=product.price
    }
    else{
        result[product.category]=product.price
    }
})

console.log(result)