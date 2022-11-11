const inquirer = require('inquirer')
const helper = require('./helper')


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
  .then((response) => {
    console.log({response});
    const teamMngName = response.teammanager
    const empID = response.empid
    const email = response.email
    const officeNum = response.officenumber
    const gitHubUser = response.githubusername
    console.log(teamMngName,empID,email,officeNum,gitHubUser)
    helper.writeHtmlFile(response)
  })
  