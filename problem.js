
//write factorial function  
// ex:5!=5*4*3*2*1
//with function
//with Recursion



  function factorial(n){
 
      let fact=1
      for(let i=n;i>=1 ;i--){
  
  
         fact=fact*i
  
      }
       
    console.log(fact)
          
    }
  
  factorial(3)        


 //Recursion
 function  factorial(n){

  if(n==0){
 
     return  1;
}
return n*factorial(n-1);

}
console.log(factorial(5))
 