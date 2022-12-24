
const NumberType = Object.freeze({
	even: "even",
	odd: "odd",
	 
})



var readNumber=function(){
   
 
     var num;
        prompt("entre notre numbre" )
 
 }



 
   var  checkNumber=function(num){
    
      if(num  % 2===0){
        
         return  NumberType.even;
        
      }else{
        return  NumberType.odd;
      }
  }
   
   
   
   
   
  var printNumber=function(NumberType){

    console.log( `${NumberType}`)
         

    
  };
  



  var two=function(){
    
  
       printNumber(checkNumber(readNumber()))
  }
  
     
  
  
 
  