
function Info() {
    this.firstName =prompt("enter first name");
    this.lastName = prompt("enter last name");
    
    this.fullname= function( ) {

    if( this.fullname==="true"){

     var full=   this.firstName + " " + this.lastName;
    }else{

       var full= this.lastName + " " + this.firstName;
    }

      return  full;
    };
   
  }
 
    const myFather = new Info();

        alert(myFather.fullname())
   
 
// function info() {

//   let nme = prompt("entre votre name");
  
//   let lastname = prompt("entre votre lastname");

//   return  [ nme, lastname ];
// }

// function fullname(nme, lastname) {
//   var fullname = ` ${nme}  ${lastname}`;

//   return fullname ;
// }
 

 