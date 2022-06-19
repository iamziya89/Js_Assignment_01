let n=123456;
let i=0;
while(n>=0){
    let rem=n%10;
     n=Math.floor(n/10)
    if(rem%2==0){
        console.log(rem);
    }
}