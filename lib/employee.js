

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      
    }

    getName();
    getId();
    getEmail();
    getRole();

    getRole(){
      return 'Employee'
    };

    printInfo() {
        console.log(`This Employee's name is ${this.name}`);
        console.log(`This Employee's has an id of ${this.id}`);
    
      }
}

  module.exports = Employee;