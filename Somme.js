


 
function recomendationn( ){
   
    
   
    var recomendation= prompt( "entre un nom rec");
 
  return recomendation;
}


function ReadAge( ){
   
 
   
    var age= prompt( "entre un nom ber");
 
  return age;
}


function HasDrive( ){
   
 
     var hasdrive= prompt( "vous avez un driver");
    
   return hasdrive;
 
};



 

function check( age,hasdrive, recomendation){
 
     if(recomendation==="true"){
       
      
       alert("ok");

     }   else if( age>21 &&  hasdrive==="true"  ){
 
       alert("okk");
    
  } else{
    alert("NoN");
}
  
  
}
     check( ReadAge( ),  HasDrive( ) ,  recomendationn())