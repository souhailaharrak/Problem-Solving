
//write function that take  2 params 
// first paramter is strign of one worde
// second paramtre is a character 
//calculate  the number of char that opper in the strign 

function Count(Stn,Chart){
 
    let count=0; 
    for(let i=0;i<=Stn.length;i++){

      if(Stn[i]==Chart){

        count++;
      }
  
    }

    console.log(count)
}
Count("code","e")