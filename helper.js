const fs = require('fs')

function writeHtmlFile(data){
  var html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
    <container>
  ${data.teammanager}
  ${data.empid}
  ${data.email}
  ${data.officenumber}
  ${data.githubusername}
    
    </container>
  </body>
  </html>`;
  return fs.writeFile("index.html", html, (err) => {
    if(err) return console.error(err);
    console.log("Success!");
  });
}

module.exports ={
    writeHtmlFile
}