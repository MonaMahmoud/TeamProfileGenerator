const Intern = require("../lib/Intern");



describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
    const intern = new Intern("Mona", 3,"mona@gamurs.com","University of Sydney");

      expect(intern.name).toEqual("Mona");
      expect(intern.id).toEqual(3);
      expect(intern.email).toEqual("mona@gamurs.com");
      expect(intern.school).toEqual("University of Sydney");
    });

    it("should throw an error if provided no arguments", () => {
      const intern = () => new Intern();

      expect(intern).toThrow();
    });

    // it("should throw an error if not provided an id", () => {
    //   const intern = () => new Intern("Mona");
    //   const err = new Error("Expected parameter 'id' to be a non-negative number");

    //   expect(intern).toThrowError(err);
    // });

    it("should throw an error if 'name' is not a string", () => {
      const intern = () => new Intern(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(intern).toThrowError(err);
    });
  });
});
