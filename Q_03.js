let n=parseInt(process.argv[2]);
let last=n%10;
while(n>=10)
{
    n=Math.floor(n/10);
}
console.log("Last Digit :"+last+"  "+"First Digit: "+n);