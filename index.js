const inquirer = require('inquirer');
const fs = require('fs');
const { off } = require('process');


class Employee{
  constructor(name,id,email){
    this.name = name;
    this.id = id;
    //this.officeNo = officeNo;
    this.email = email;
  }
  getName(){
    return this.name;
  }
  getId(){return this.id;}

  getEmail(){return this.email;}

  getRole(){return "Employee";}
}


class Manager extends Employee{
  constructor(name,id, officeNo,email){
    super(name, id, email);
    this.officeNo = officeNo;
  }

  getRole(){return "Manager";};

  getOfficeNo(){return this.officeNo;}

  team = [];
}

class Engineer extends Employee{
  constructor(name,id,email, github){
    super(name, id,email);
    this.github = github;
  }
  getGithub(){return this.github;}

  getRole(){return "Engineer";}
}

class Intern extends Employee{
  constructor(name,id,email, school){
    super(name, id, email);
    this.school = school;
  }

  getSchool(){return this.school;}

  getRole(){return "Intern";}
}




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
    message: "What's the engineer's github?",
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
}

init();




function generateHtml(manager){
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>The Team</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}