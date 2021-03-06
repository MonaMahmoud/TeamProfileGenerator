module.exports =  class Employee{
    constructor(name,id,email){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
          else if(typeof(id) == "undefined"||id < 0){
            throw new Error("Expected parameter 'id' to be a non-negative number");
          }

          
        else{
          this.name = name;
      this.id = id;
      this.email = email;
        }

      
    }
    getName(){
      return this.name;
    }
    getId(){return this.id;}
  
    getEmail(){return this.email;}
  
    getRole(){return "Employee";}
  }

  