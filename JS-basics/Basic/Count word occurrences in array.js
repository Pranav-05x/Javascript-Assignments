let array=["apple", "banana", "apple", "orange", "banana", "apple","mango","mango"]

let result={};

array.forEach(function(fruit){
    if(result[fruit]){
        result[fruit]++;
    }
    else{
        result[fruit]=1;
    }
})

console.log(result);