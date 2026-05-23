let arr={ x: [1,2,3], y: [2,3,4], z: [4,5] }

let unique=[];

Object.keys(arr).forEach(function(key){
    for(let i=0;i<arr[key].length;i++){
        if(!unique.includes(arr[key][i])){
            unique.push(arr[key][i]);
        }

    }
})

console.log(unique);