const Engineer = require("../lib/engineer");

test("can get name of engineer",() =>{
    const myEngineer = new Engineer("jane",345,"jane@jane","janegit")
    expect("jane").toBe(myEngineer.getName())
})
test("can get id of engineer",() =>{
    const myEngineer = new Engineer("jane",345,"jane@jane","janegit")
    expect(345).toBe(myEngineer.getId())
})
test("can get email of engineer",() =>{
    const myEngineer = new Engineer("jane",345,"jane@jane","janegit")
    expect("jane@jane").toBe(myEngineer.getEmail())
})
test("can get github of engineer",() =>{
    const myEngineer = new Engineer("jane",345,"jane@jane","janegit")
    expect("janegit").toBe(myEngineer.getGithub())
})