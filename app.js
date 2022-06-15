// team profiles
// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// file that creates the webpage for team profile
const generateHTML = require('./src/generateHTML');

// employees array
const employees = [];

// MANAGER node questions
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
            // Ensure that a name is input or bounceback
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
        name: 'id',
        message: 'Please, enter the numeric ID code of your manager.',
        // ensure a number is entered, not a string
        validate: nameInput => {
            // if nameInput in not a number
            if (isNaN(nameInput)) {
                // Repeat the question to try and get user to input number
                console.log("Please, enter the ID number of your manager.");
                // Exit function
                return false;
            } else {
                // If numeric code is a number, then exit function and move on
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the team manager?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the office number of the team manager?',
        // ensure a number is entered, not a string
        validate: nameInput => {
            // if nameInput in not a number
            if (isNaN(nameInput)) {
                // Repeat the question to try and get user to input number
                console.log("Please, enter the office number of the manager.");
                // Exit function
                return false;
            } else {
                // If office number is a number, then exit function and move on
                return true;
            }
        }
    }
    ])
    // Then take the team manager input info
    .then(managerInfo => {
        // make Node questions into a variable "managerInfo"
        const { name, id, email, office }  = managerInfo;
        // make a manager class
        const manager = new Manager (name, id, email, office);

        // Push manager to the team array so it can be added to the generateHTML
        employees.push(manager);
        // I am not seeing the value, so let's log it
        console.log(manager);
    })
};

// EMPLOYEE node questions, keep working on this part
const addEmployee = () => {
    console.log(`--- Add employee information ---`);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose the role of the employee.',
            // Give two employee choices as the Intern and Engineer classes extend the employee class
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please, enter the numeric ID code of the employee.',
            validate: nameInput => {
                if (nameInput) {
                    return false;
                } else {
                    console.log("Please, enter the ID number of the employee.");
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Who is the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Please, enter the name of the employee.');
                    return false;
                }
            }
        },
        // ENGINEER specific question, use WHEN to limit the question to LIST CHOICE === ENGINEER
        {
            // Limit question to ENGINEER
            when: (input) => input.role === 'Engineer',        
            type: 'input',
            name: 'github',
            message: 'Please, enter the GitHub username of the Engineer.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please, make sure to enter the GitHub username of the Engineer.');
                }
            }
        },
        // INTERN specific question, use WHEN to limit the question to LIST CHOICE === INTERN
        {
            // Limit question to INTERN
            when: (input) => input.role === 'Intern',   
            type: 'input',
            name: 'institution',
            message: 'Please, enter the educational institution of the Intern.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please, enter the school of the Intern.');
                }
            }
        },
        // Limit team by default, but give user a choice to add more team members based on their team size
        {
            type: 'confirm',
            name: 'anotherEmployee',
            message: 'Are there more team members to add?',
            default: false
        }
    ])
    // like managerInfo let's make an employee variable to add to the employees array
    // institution and addEmployee values are not being read
    .then(employeeInfo => {
        let { name, id, email, role, github, institution, anotherEmployee }  = employeeInfo;
        console.log(anotherEmployee);
        console.log(institution);
        let employee;

        // scope the engineer to this block
        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        }

        // scope the intern to this block
        if (role === intern) {
            employee = new Intern(name, id, email, institution);
            console.log(employee);
        }

        employees.push(employees);

        if (addEmployee) {
            return addEmployee(employees);
        } else {
            return employees;
        }
    })

};

// Generate HTML with Node info and file system
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check out your new team profile website in the folder './dist'")
        }
    })
};

// run addManager fxn to add manager to array
addManager()
    // run addEmployee fxn to add employee(s) to array
    .then(addEmployee)
    // then add the whole employees array to the generateHTML data inputs and
    .then(employees => { 
        return generateHTML(employees);
    })
    // write an HTML file with the generated employees array
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    // if error then state error in command-line
    .catch(err => {
        console.log(err);
    });