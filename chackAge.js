

function ReadAge( ){
   
 var age;
  
 return prompt( "entre un nom ber");
 
 
}


function HasDrive( ){
   
  var hasdrive;
  
  return  prompt( "vous avez un driver");
 
 
};

 

function check(age,hasdrive){
  
 
  
 
  if(age >21 && hasdrive==="yes"  ){
 
 
    
     console.log("ok")
    
  }else{
    
    console.log("NOk")
  }
  
  
}
        check(  ReadAge( ),HasDrive() )