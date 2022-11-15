const fs = require('fs');




function writeHtmlFile(data){
  console.log(data)
  var managers = data.filter(employee => employee.officenumber)
  var engineers = data.filter(employee => employee.github )
  var interns = data.filter(employee => employee.school)

  function managerCard(object){
  return `<container class="card" style="width: 15rem;">
  <div class="bg-info" style="color:white">
    <h1>${managers[0].name}</h1>
    <h2>Manager</h2>
    <!-- <a href="https://www.github.com/1234">1234</a> -->
  </div>
  <div>
    <h3>ID: 123</h3>
    <h3>Email: allan@allan.com</h3>
    <h3>Office number: 1</h3>
  </div>
</container>`
}

  function engineerCard(object){
    object = engineers
    // for(i = 0; i < engineers.length ; i++){
    //   console.log("objecti" + engineers)
    //   console.log("objectlength" + engineers.length)
    //   console.log("objectiname" + engineers[i].name)
    for(i=0;i < engineers.length; i++){
    return `<container class="card" style="width: 15rem;">
  <div class="bg-info" style="color:white">
    <h1>${engineers[i].name}</h1>
    <h2>Engineer</h2>
    <!-- <a href="https://www.github.com/1234">1234</a> -->
  </div>
  <div>
    <h3>ID: 123</h3>
    <h3>Email: allan@allan.com</h3>
    <h3>Office number: ${engineers[0].github}</h3>
  </div>
</container>`
  }}

console.log(managerCard)
console.log(engineerCard)
  //format the data
  var html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
      <title>Document</title>
  </head>
  <body>
  <h1 class="bg-danger jumbotron text-center" > My Team </h1>
        ${managerCard(managers)}
        ${engineers.map(employee => html+= engineerCard(employee))}

  </body>
  </html>`;
  return fs.writeFile("./dist/index.html", html, (err) => {
    if(err) return console.error(err);
    console.log("Success!");
  });
}

module.exports = writeHtmlFile