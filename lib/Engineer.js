const Employee = require("./Employee");
module.exports = class Engineer extends Employee{
    constructor(name,id,email, github){

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        
          if ( isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
          }
        
      super(name, id,email);
      this.github = github;
    }
    getGithub(){return this.github;}
  
    getRole(){return "Engineer";}
  }