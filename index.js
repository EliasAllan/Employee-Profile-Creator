const inquirer = require('inquirer')

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
    var teamMngName = response.teammanager
    console.log(teamMngName)
  })
  