function removeKey(obj, target) {
    for (let key in obj) {

        // if key matches → delete it
        if (key === target) {
            delete obj[key];
        }

        // if value is an object → go deeper
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            removeKey(obj[key], target);
        }
    }

    return obj;
}

let data = {
    a: {
        b: {
            c: 1,
            d: 2
        }
    }
};

console.log(removeKey(data, "c"));