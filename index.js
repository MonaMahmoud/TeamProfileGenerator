const inquirer = require('inquirer');
const fs = require('fs');
//const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
//const { off } = require('process');

 function promptManager(){
  return  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What's the manager's name?",
    },
    {
      type: 'input',
      name: 'managerID',
      message: "What's the manager employee ID?",
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What's the manager employee email?",
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: "What's the manager office no?",
    },
  
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'addMember',
      choices: ['Engineer', 'Intern', 'No thanks'],
  },
  ]);
};

 function promptEngineer(){return inquirer.prompt([
  {
    type: 'input',
    name: 'engName',
    message: "What's the Engineer's name?",
  },
  {
    type: 'input',
    name: 'engID',
    message: "What's the engineer employee ID?",
  },
  {
    type: 'input',
    name: 'engEmail',
    message: "What's the engineer email?",
  },
  {
    type: 'input',
    name: 'engGithub',
    message: "What's the engineer's github username?",
  },

  {
    type: 'list',
    message: 'Would you like to add another team member?',
    name: 'addMember',
    choices: ['Engineer', 'Intern', 'No thanks'],
},
]);
};

  

 function promptIntern(){
  return  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What's the intern's name?",
    },
    {
      type: 'input',
      name: 'internID',
      message: "What's the intern employee ID?",
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What's the intern's email?",
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What's the intern's school?",
    },
  
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'addMember',
      choices: ['Engineer', 'Intern', 'No thanks'],
  },
  ]);
};

function generateHTML(manager){
  var teamHTML="";
  if(manager.team.length!=0){
    for(var i=0;i<manager.team.length;i++){
      //console.log(i);
      if(!(i%2)){
        teamHTML+=`<div class="row">`;
      }
      if(manager.team[i].getRole()=="Engineer"){
        
        teamHTML+=`<div class="card col-4" style="width: 18rem;">
        <img class="card-img-top" src="Assets/images/engineer.jfif" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Engineer: ${manager.team[i].getName()}</h5><br>
          <p class="card-text">ID: ${manager.team[i].getId()}<br>
           Email: <a href="mailto:${manager.team[i].getEmail()}">${manager.team[i].getEmail()}</a><br>
              Github: <a href="https://github.com/${manager.team[i].getGithub()}">https://github.com/${manager.team[i].getGithub()}</a>
          </p>
         
        </div>
      </div>
      `;
      }
      else if(manager.team[i].getRole()=="Intern"){
        teamHTML+=`<div class="card col-4" style="width: 18rem;">
        <img class="card-img-top" src="Assets/images/intern.jfif" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Intern: ${manager.team[i].getName()}</h5><br>
          <p class="card-text">ID: ${manager.team[i].getId()}<br>
              Email: <a href="mailto:${manager.team[i].getEmail()}">${manager.team[i].getEmail()}</a><br>
              School: ${manager.team[i].getSchool()}
          </p>
          
        </div>
      </div>
      `
      }
      if(i%2){
        teamHTML+=`</div>`;
      }
    }
  }
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>The Team</title>
  </head>
  <body>

  <h1 class="h1 text-center">The Team!</h1>
 <div class="container">
  <div class="row  justify-content-md-center">
      <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="Assets/images/manager.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <p class="card-text">ID: ${manager.getId()}<br>
            Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br>
                Office: ${manager.getOfficeNo()}
            </p>
            
          
          </div>
        </div>
        </div>
        ${teamHTML}
  </div>
  </div>
  </body>
  </html>`;
}

async function init(){

  var answers = await promptManager();
  var more ="";
  var manager = new Manager(answers.managerName,answers.managerID,answers.managerOffice,answers.managerEmail);
  while(more!=="No thanks"){
    more = answers.addMember;
    if(more==="Engineer"){
      answers = await promptEngineer();
      var engineer = new Engineer(answers.engName,answers.engID,answers.engEmail,  answers.engGithub);
      manager.team.push(engineer);
    }
    else if(answers.addMember==="Intern"){
      answers = await promptIntern();
      var intern = new Intern(answers.internName,answers.internID,answers.internEmail, answers.internSchool);
      manager.team.push(intern);
    }
  }
  console.log(manager);
  //write the data into html file



  fs.writeFile('index.html', generateHTML(manager), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    console.log(generateHTML(manager));
  });

  
}

init();




