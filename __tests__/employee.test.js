const Employee = require("../lib/employee");

test("can get name of employee",() =>{
    const myEmployee = new Employee("allan", 123, "allan@email")
    expect("allan").toBe(myEmployee.getName())
})