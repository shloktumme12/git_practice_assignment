let num = 13;
let count = 0;

for(let i=0; i<=num; i++){
    if(num%i==0){
      count=count+1;
    }
}
if(count==2){
  console.log("Prime number");
}
else{
  console.log("not a prime numer");
}