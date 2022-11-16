const inquirer = require('inquirer')
const helper = require('./src/helper')
const fs = require('fs');
const { getSystemErrorName } = require('util');
const { getDiffieHellman } = require('crypto');
const writeHtmlFile = require('./src/helper')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
employeeArr = [];
var managString = ""
  var engString = ""
  var intString = ""


// employeeArr.push(new Engineer("Alan", 5, "Allan@email.com", "github2"), new Engineer("Engi", 10, "Engi@email.com","gitty"),new Engineer("oderengi", 11, "oderEngi@email.com","odergitty"))
// var engineers = employeeArr.filter(employee=> employee.github)
// function htmlCard(object){
//   return `<div>
//   <h1>${object.name}</h1>
//   <a href="https://www.github.com/${object.github}">${object.github}</a>
//   </div>`
// }
// var htmlString = ""
// engineers.map(employee => htmlString+= htmlCard(employee))
// console.log(htmlString)



const addEng = () => {
  inquirer
    .prompt([
      {
        type: 'Input',
        name: 'engName',
        message: "What is the engineer's name ?"
      },
      {
        type: 'Input',
        name: 'engId',
        message: "What is the engineer's ID ?"
      },
      {
        type: 'Input',
        name: 'engEmail',
        message: "What is the engineer's email ?"
      },
      {
        type: 'Input',
        name: 'engGit',
        message: "What is the engineer's GitHub username ?"
      },
      
    ]).then((data) => {
      employeeArr.push(new Engineer(data.engName, data.engId, data.engEmail, data.engGit))
      console.log(employeeArr);
      mainMenu();
    })
}

const addInt =() => { 
  inquirer
  .prompt([
    {
      type: 'Input',
      name: 'intName',
      message: "What is the intern's name ?"
    },
    {
      type: 'Input',
      name: 'intId',
      message: "What is the intern's ID ?"
    },
    {
      type: 'Input',
      name: 'intEmail',
      message: "What is the intern's email ?"
    },
    {
      type: 'Input',
      name: 'intSchool',
      message: "What school does the intern go to?"
    },
    
  ]).then((data) => {
    employeeArr.push(new Intern(data.intName, data.intId, data.intEmail, data.intSchool))   
      console.log(employeeArr);
      mainMenu();
  })
}

const exit =() =>{
  createCards()
  writeHtmlFile(managString,engString,intString)
  console.log("goodbye")
}

const mainMenu = () => {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What do you want to do ?',
      name: 'addemployee',
      choices: ['Add an engineer', 'Add an intern', 'Finish building your team']
    },
  ])

  .then((data) => {
    switch (data.addemployee) {
    
      case 'Add an engineer':
          addEng();
          break;
      case 'Add an intern':
          addInt();
          break;
      default:
          exit();
    }
  });
}

const loginMenu = () => {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the team managers name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter employee ID',
      name: 'empId',
    },
    {
      type: 'input',
      message: 'Enter email adress',
      name: 'email',
    },
    {
      type: 'input',
      message: "Enter office number",
      name: 'officeNumber'
    }
  ])

  .then((data) => {
    employeeArr.push(new Manager(data.name, data.empId, data.email, data.officeNumber))
    mainMenu()
    // console.log({data});
    // const teamMngName = data.teammanager
    // const empID = data.empid
    // const email = data.email
    // const officeNum = data.officeNumber
    // const gitHubUser = data.githubusername
    // console.log(teamMngName,empID,email,officeNum,gitHubUser)
    // helper.writeHtmlFile(data)
    
  });
}

const createCards = () =>{
  var managers = employeeArr.filter(employee => employee.officeNumber)
  var engineers = employeeArr.filter(employee => employee.github )
  var interns = employeeArr.filter(employee => employee.school)

  function managerCard(object){
    return `<div>
    <h1>${object.name}</h1>
    <a href="https://www.github.com/${object.officeNumber}">${object.officeNumber}</a>
    </div>`
  }
  function engineerCard(object){
    return `<div>
    <h1>${object.name}</h1>
    <a href="https://www.github.com/${object.github}">${object.github}</a>
    </div>`
  }
  function internCard(object){
    return `<div>
    <h1>${object.name}</h1>
    <a href="https://www.github.com/${object.school}">${object.school}</a>
    </div>`
  }
  
  managers.map(employee => managString+= managerCard(employee))
  engineers.map(employee => engString+= engineerCard(employee))
  interns.map(employee => intString+= internCard(employee))
  console.log(managString) 
  console.log(engString) 
  console.log(intString) 
}

loginMenu();

module.exports = { createCards
}