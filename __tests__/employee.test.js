const Employee = require("../lib/employee");

test("can get name of employee",() =>{
    const myEmployee = new Employee("allan", 123, "allan@email")
    expect("allan").toBe(myEmployee.getName())
})
test("can get id of employee",() =>{
    const myEmployee = new Employee("allan", 123, "allan@email")
    expect(123).toBe(myEmployee.getId())
})
test("can get email of employee",() =>{
    const myEmployee = new Employee("allan", 123, "allan@email")
    expect("allan@email").toBe(myEmployee.getEmail())
})