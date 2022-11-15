const inquirer = require('inquirer')
const helper = require('./src/helper')
const fs = require('fs');
const { getSystemErrorName } = require('util');
const { getDiffieHellman } = require('crypto');
const writeHtmlFile = require('./src/helper')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

employeeArr = [];
// employeeArr.push(new Engineer("Alan", 5, "Allan@email.com", "github2"), new Engineer("Engi", 10, "Engi@email.com","gitty"))
// var engineers = employeeArr.filter(employee=> employee.github)
// function engineerCard(object){
//   return `<div>
//   <h1>${object.name}</h1>
//   <a href="https://www.github.com/${object.github}">${object.github}</a>
//   </div>`
// }

// var htmlString = ""
// engineers.map(employee => htmlString+= engineerCard(employee))
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
      console.log(`${data.engName} is a good engineer`)     
      // console.log(employeeArr);
      mainMenu();
    })
}

const addInt =() => { 
  inquirer
  .prompt([
    {
      type: 'Input',
      name: 'intname',
      message: "What is the intern's name ?"
    },
    {
      type: 'Input',
      name: 'intid',
      message: "What is the intern's ID ?"
    },
    {
      type: 'Input',
      name: 'intemail',
      message: "What is the intern's email ?"
    },
    {
      type: 'Input',
      name: 'intschool',
      message: "What school does the intern go to?"
    },
    
  ]).then((data) => {
    employeeArr.push({
      intName: data.intname,
      intId: data.intid,
      intEmail: data.intemail,
      intSchool: data.intschool,
    })
    console.log(`${data.intname} is a good engineer`)     
    console.log(employeeArr);
    mainMenu();
  })
}

const exit =() =>{
 
  writeHtmlFile(employeeArr)
  console.log("goodbye")
  console.log("asdasdasd" + employeeArr)
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
    // const officeNum = data.officenumber
    // const gitHubUser = data.githubusername
    // console.log(teamMngName,empID,email,officeNum,gitHubUser)
    // helper.writeHtmlFile(data)
    
  });
}


loginMenu();