const Manager = require("../lib/manager");

test("can get name of manager",() =>{
    const myManager = new Manager("joe",234,"joe@joe",2)
    expect("joe").toBe(myManager.getName())
})
test("can get id of manager",() =>{
    const myManager = new Manager("joe",234,"joe@joe",2)
    expect(234).toBe(myManager.getId())
})
test("can get email of manager",() =>{
    const myManager = new Manager("joe",234,"joe@joe",2)
    expect("joe@joe").toBe(myManager.getEmail())
})
test("can get office number of manager",() =>{
    const myManager = new Manager("joe",234,"joe@joe",2)
    expect(2).toBe(myManager.getOffice())
})