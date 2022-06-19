let n=parseInt(process.argv[2]);
let sum=0;
let count=0;
let temp=n;
let b=n;
while(n){
    count++;
    n=Math.floor(n/10);
}
console.log(count)
while(temp){
    let a=temp%10;
    sum=sum+a**count;
    // n=parseInt(n/10);
    temp=Math.floor(temp/10);
}
if(sum==b){
    console.log("Armstrong number")
}else{
    console.log("not armstrong no")
}