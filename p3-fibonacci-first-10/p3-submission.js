// Write your fibonacci series solution code here
let x=0;
let y=1;
for(let i=1;i<=10;i++){
    let z=x+y;
    x=y;
    y=z;
    console.log(z);
}