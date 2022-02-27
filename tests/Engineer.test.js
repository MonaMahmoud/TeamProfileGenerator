const Engineer = require("../lib/Engineer");
// let emp = require('../src/Employee');
// let Employee = emp.Employee;
//import { Employee } from '../src/Employee';



describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
    const engineer = new Engineer("Mona", 3,"mona@gamurs.com","MonaMahmoud");

      expect(engineer.name).toEqual("Mona");
      expect(engineer.id).toEqual(3);
      expect(engineer.email).toEqual("mona@gamurs.com");
      expect(engineer.github).toEqual("MonaMahmoud");
    });

    it("should throw an error if provided no arguments", () => {
      const engineer = () => new Engineer();

      expect(engineer).toThrow();
    });

    it("should throw an error if not provided an id", () => {
      const engineer = () => new Engineer("Mona");
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(engineer).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const engineer = () => new Engineer(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(engineer).toThrowError(err);
    });
  });
});
