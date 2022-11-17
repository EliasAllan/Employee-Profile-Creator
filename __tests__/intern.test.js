const Intern = require("../lib/intern");

test("can get name of intern",() =>{
    const myIntern = new Intern("jim",456,"jim@jim","jimschool")
    expect("jim").toBe(myIntern.getName())
})
test("can get id of intern",() =>{
    const myIntern = new Intern("jim",456,"jim@jim","jimschool")
    expect(456).toBe(myIntern.getId())
})
test("can get email of intern",() =>{
    const myIntern = new Intern("jim",456,"jim@jim","jimschool")
    expect("jim@jim").toBe(myIntern.getEmail())
})
test("can get github of intern",() =>{
    const myIntern = new Intern("jim",456,"jim@jim","jimschool")
    expect("jimschool").toBe(myIntern.getSchool())
})