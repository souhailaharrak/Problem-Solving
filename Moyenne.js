

//constarcture in js

function ReadNumber() {
      this.num1 =prompt("enter num1");
      this.num2 =prompt("enter num2");
      this.num3 =prompt("enter  num3");

 
    
    this.somme= function( ) {

      var somme= parseInt(this.num1)+parseInt(this.num2)+parseInt(this.num3);
      return somme;
      
    };

    this.reve=function(){

        var avg=this.somme()/3;
        return avg;
    }
 
  }
 
    
     const Result = new ReadNumber();
           alert(Result.reve())