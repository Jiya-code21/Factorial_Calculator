alert("Welcome ji to factorial calculator")
let a=prompt("Enter the number : ")
 function factorial(a){
     let facto=1;
     for(let i=1;i<=a;i++){
         facto=facto*i;
     }
     return facto
 }
 let result=factorial(a)
 console.log(result);
