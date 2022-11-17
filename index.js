const inquirer = require('inquirer')
const helper = require('./src/helper')
const fs = require('fs');
const { getSystemErrorName } = require('util'); //<-------- whats this ?
const { getDiffieHellman } = require('crypto'); //<-------- and this ?
const writeHtmlFile = require('./src/helper')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
employeeArr = [];
var managString = ""
var engString = ""
var intString = ""

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

    
    return `<container class="card" style="height: 21rem; width: 18rem; margin: 30px 95px ">
    <div class="bg-info" style="color:white">
      <h1>${object.name}</h1>
      <h2>Manager</h2>
    </div>
    <div style="margin: 40px 20px">
      <h3 style="border-width: 1px;border-style: solid;">ID: ${object.id}</h3>
      <h3 style="border-width: 1px;border-style: solid;">Email: <a href="mailto:${object.email}">${object.email}</a> </h3>     
      <h3 style="border-width: 1px;border-style: solid;">Office number: ${object.officeNumber}</h3>
    </div>
  </container>`
  }

  function engineerCard(object){
    return `<container class="card" style="height: 21rem; width: 18rem; margin: 30px 95px ">
    <div class="bg-info" style="color:white">
      <h1>${object.name}</h1>
      <h2>Engineer</h2>
    </div>
    <div style="margin: 40px 20px">
      <h3 style="border-width: 1px;border-style: solid;">ID: ${object.id}</h3>
      <h3 style="border-width: 1px;border-style: solid;">Email: <a href="mailto:${object.email}">${object.email}</a> </h3>     
      <h3 style="border-width: 1px;border-style: solid;">Github: <a href="https://www.github.com/${object.github}">${object.github}</a> </h3>     
    </div>
  </container>`
  }
  function internCard(object){
    return `<container class="card" style="height: 21rem; width: 18rem; margin: 30px 95px; ">
    <div class="bg-info" style="color:white">
      <h1>${object.name}</h1>
      <h2>Intern</h2>
    </div>
    <div style="margin: 40px 20px">
      <h3 style="border-width: 1px;border-style: solid;">ID: ${object.id}</h3>
      <h3 style="border-width: 1px;border-style: solid;">Email: <a href="mailto:${object.email}">${object.email}</a> </h3>     
      <h3 style="border-width: 1px;border-style: solid;">School: ${object.school}</h3>
    </div>
  </container>`
  }
  
  managers.map(employee => managString+= managerCard(employee))
  engineers.map(employee => engString+= engineerCard(employee))
  interns.map(employee => intString+= internCard(employee))
}

loginMenu();

module.exports = { createCards
}