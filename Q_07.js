let n=121;
let temp=n;
let last=n%10;
n=Math.floor(n/10);
let middle=n%10;
n=Math.floor(n/10);
let first=n;
let rev=last*100+middle*10+first;
if(rev==temp){
    console.log("Number is reverse")
}else{
    console.log("Number is not reverse")
}