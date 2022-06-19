let num1=10
let num2=25
let rem=0
let pro=1
while(num1<=num2){
    rem=num1%10;
    if(rem==4 && num1%2==0){
        pro=pro*num1;
    }
    num1++;
}
console.log(pro)