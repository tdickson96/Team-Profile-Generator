// team profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// link to page creation
const generateHTML = require('./src/generateHTML');

// team array
const team = [];

// MANAGER
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'first name and last name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if (nameInput) {
                return true;
            } else {
                console.log("Please, enter the name of the team manager.");
                return false;
            }
        }
    },
    {
        type: 'input',
            name: 'identification',
            message: 'Please, enter the numeric ID code of your manager.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                return true;
            } else {
                console.log("Please, enter the ID number of your manager.");
                return false;
            }
        }
    },
    ])
    .then(managerInfo => {
        const { name, id, email }  = managerInfo;
        const manager = new Manager (name, id, email);
    })
};

// EMPLOYEE
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'first name and last name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if (nameInput) {
                return true;
            } else {
                console.log("Please, enter the name of the team manager.");
                return false;
            }
        }
    },
    {
        type: 'input',
            name: 'identification',
            message: 'Please, enter the numeric ID code of your manager.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                return true;
            } else {
                console.log("Please, enter the ID number of your manager.");
                return false;
            }
        }
    },
    ])
    .then(managerInfo => {
        const { name, id, email }  = managerInfo;
        const manager = new Manager (name, id, email);
    })
};

// Generate HTML with Node info and file system
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check out your new team profile website in './dist'")
        }
    })
};

// run addManager fxn
addManager()
    .then(addEmployee)
    .then(team => { });