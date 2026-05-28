function cheak(obj1, obj2) {

    for (let key in obj1) {

        // if values are objects → recurse
        if (typeof obj1[key] === "object" && obj1[key] !== null) {

            if (!cheak(obj1[key], obj2[key])) {
                return false;
            }
        }

        // normal value comparison
        else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let obj1 = { a: { x: 1, y: 2 } }
let obj2 = { a: { x: 1, y: 2 } }

console.log(cheak(obj1, obj2))