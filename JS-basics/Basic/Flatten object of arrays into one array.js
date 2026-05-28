let food={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

let array=[];

Object.keys(food).forEach(function(key){
    for(let i=0;i<food[key].length;i++){
        array.push(food[key][i]);
    }

})

console.log(array);