let char={expected:["a","b","c"],actual:["b","c","d"]}

function reconcileLists(char){
    let missingItems = char.expected.filter(item => !char.actual.includes(item));
    let extraItems = char.actual.filter(item => !char.expected.includes(item));
    return { missingItems, extraItems };
}

console.log(reconcileLists(char));