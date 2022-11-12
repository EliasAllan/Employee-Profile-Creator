const fs = require('fs')

function writeHtmlFile(data){
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
    <container class= "card" style="width: 18rem;">
  ${data.teammanager}
  ${data.empid}
  ${data.email}
  ${data.officenumber}
  ${data.githubusername}  
    </container>
  </body>
  </html>`;
  return fs.writeFile("./dist/index.html", html, (err) => {
    if(err) return console.error(err);
    console.log("Success!");
  });
}

module.exports ={
    writeHtmlFile
}