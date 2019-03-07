const add = (x) => { 
    return (y) => {
        return x + y;
    } 
}

// This is the same as above
// const add = x => y  => x + y;

// Closure - the results of the inner function is remembered
// Look up carrying

const addFive = add(5);

let result;
result = addFive(7); // should output 12

// I could also do this
// add(5)(7) 

console.log("addFive(7)", result);


