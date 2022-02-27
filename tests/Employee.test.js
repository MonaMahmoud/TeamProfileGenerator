const Employee = require("../lib/Employee");


describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
    const employee = new Employee("Mona", 3,"mona@gamurs.com");

      expect(employee.name).toEqual("Mona");
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual("mona@gamurs.com");
    });

    it("should throw an error if provided no arguments", () => {
      const emp = () => new Employee();

      expect(emp).toThrow();
    });

    it("should throw an error if not provided an id", () => {
      const emp = () => new Employee("Mona");
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(emp).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const emp = () => new Employee(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(emp).toThrowError(err);
    });
  });
});
