const inquirer = require('inquirer')
const helper = require('./helper')
const fs = require('fs');
const { getSystemErrorName } = require('util');
const { getDiffieHellman } = require('crypto');

employeeArr = [];

// The first class is an `Employee` parent class with the following properties and methods:

//* `name`

//* `id`

//* `email`

//* `getName()`

//* `getId()`

//* `getEmail()`

//* `getRole()`&mdash;returns `'Employee'`

const addEng = () => {
  inquirer
    .prompt([
      {
        type: 'Input',
        name: 'engname',
        message: "What is the engineer's name ?"
      },
      {
        type: 'Input',
        name: 'engid',
        message: "What is the engineer's ID ?"
      },
      {
        type: 'Input',
        name: 'engemail',
        message: "What is the engineer's email ?"
      },
      {
        type: 'Input',
        name: 'enggit',
        message: "What is the engineer's GitHub username ?"
      },
      
    ]).then((data) => {
      employeeArr.push({
        engName: data.engname,
        engId: data.engid,
        engEmail: data.engemail,
        engGit: data.enggit,
      })
      console.log(`${data.engname} is a good engineer`)     
      console.log(employeeArr);
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
  writeIndexFile(employeeArr)
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
      name: 'teammanager',
    },
    {
      type: 'input',
      message: 'Enter employee ID',
      name: 'empid',
    },
    {
      type: 'input',
      message: 'Enter email adress',
      name: 'email',
    },
    {
      type: 'input',
      message: "Enter office number",
      name: 'officenumber'
    },
    {
      type: 'input',
      message: "Enter Github username",
      name: 'githubusername'
    },
  ])

  .then((data) => {
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

function writeIndexFile(data){

  return fs.writeFile("teams-webpage.html", JSON.stringify(data), (err) =>{
    if(err) return console.error(err);
    console.log("index file created !")
  });
}

loginMenu();