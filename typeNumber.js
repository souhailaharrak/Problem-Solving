

  //Is enum type?
//An enum type is a special data type that enables for a variable to be a set of predefined constants.
   //The variable must be equal to one of the values that have been predefined for it.

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
  
     
  
  
 
  
