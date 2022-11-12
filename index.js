const inquirer = require('inquirer')
const helper = require('./helper')

employeeArr = [];

const addEng = () => {
}

const addInt =() => { 
}

const menu = () => {

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
    {
      type: 'list',
      message: 'What do you want to do ?',
      name: 'addemployee',
      choices: ['Add an engineer', 'Add an intern', 'Finish building your team']
    },
  ])

  .then((data) => {
    switch (data.addemployee) {
    
      case 'Add an enginer':
          addEng()
          break;
      case 'Add an intern':
          addInt()
          break;
      default:
          exit();
    }
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

menu();