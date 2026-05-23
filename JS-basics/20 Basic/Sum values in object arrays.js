let array=
    { food: [10, 20, 30],
      travel: [5, 15], 
      bills: [40, 60]
    }

let result = {}

Object.keys(array).forEach(function(key) {
    let sum = 0
    for(let i = 0; i < array[key].length; i++) {
        sum += array[key][i]
    }
    result[key] = sum
})

console.log(result)