const Employee = require("./Employee");
module.exports = class Manager extends Employee{
    constructor(name,id, officeNo,email){
      super(name, id, email);
      this.officeNo = officeNo;
    }
  
    getRole(){return "Manager";};
  
    getOfficeNo(){return this.officeNo;}
  
    team = [];
  }