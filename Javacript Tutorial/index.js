let num = Math.random();
console.log(num);

let a = prompt("Enter first Number");
let b = prompt("Enter Operation ");
let c = prompt("Enter Second Number");

// document.write(`${a} ${b} ${c}`);

let obj = {
    "+" : "-",
    "*" : "/",
    "-" : "*",
    "/" : "+"
}

if (num < 0.5) {
    console.log(`${a} ${b} ${c}`);
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);
    
    
}

else {
    b = obj[b];
    console.log(`${a} ${b} ${c}`);
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);


}
