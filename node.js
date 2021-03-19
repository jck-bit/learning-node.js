//write a javascript programme tha reverses a number

function reverse_number(n){
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(reverse_number(6754))