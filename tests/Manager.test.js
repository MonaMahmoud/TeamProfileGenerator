const Manager = require("../lib/Manager");
// let emp = require('../src/Employee');
// let Employee = emp.Employee;
//import { Employee } from '../src/Employee';



describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
    const manager = new Manager("Mona", 3,67,"mona@gamurs.com");

      expect(manager.name).toEqual("Mona");
      expect(manager.id).toEqual(3);
      expect(manager.email).toEqual("mona@gamurs.com");
      expect(manager.officeNo).toEqual(67);
    });

    it("should throw an error if provided no arguments", () => {
      const manager = () => new Manager();

      expect(manager).toThrow();
    });

    it("should throw an error if not provided an id", () => {
      const manager = () => new Manager("Mona");
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(manager).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const manager = () => new Manager(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(manager).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const manager = () => new Manager("Mona", "2");
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(manager).toThrowError(err);
    });

    it("should throw an error if 'id' is less than 0", () => {
      const manager = () => new Manager("Mona", -1);
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(manager).toThrowError(err);
    });
  });
});
