// create Manager card
const generateManager = function (manager) {
    // copy and paste index.html card
    return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.office}</p>
            </div>
        </div>
    </section>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    // copy and paste index.html card
    return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </section>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    // copy and paste index.html card
    return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </section>
    `
};

// push array to page 
generateHTML = (data) => {
    // same as team array in app.js, build out an array so we can put it into the generated HTML page
    page = []; 
    // for loop to create as many cards as length of employees array made by user input
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
        // create manager card
        if (role === 'Manager') {
            // call on function to create card
            const managerCard = generateManager(employee);
            page.push(managerCard);
        }
        // create engineer card
        if (role === 'Engineer') {
            // call on function to create card
            const engineerCard = generateEngineer(employee);
            page.push(engineerCard);
        }
        // create intern card 
        if (role === 'Intern') {
            // call on function to create card
            const internCard = generateIntern(employee);
            page.push(internCard);
        }
    }
    // join all created cards into the page array
    const employeeCards = page.join('')
    // take the employee cards and put it into the generatePage fxn that will place the data into the HTML
    const generateTeam = generatePage(employeeCards); 
    return generateTeam;
}

// generate html page template and fill with the employeeCards variable from generateHTML
const generatePage = function (employeeCards) {   
    // copy and paste HTML and fill with data state of the employee team array
    // copy HTML template that isn't filed with <section>EMPLOYEE CARDS</section> yet
    return`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
            <header>
                <nav class="navbar" id="navbar">
                    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        <!-- employee cards appear here -->
                        ${ employeeCards }
                    </div>
                </div>
            </main>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" crossorigin="anonymous"></script>
    </body>
</html>
`;
}

// export module to generateHTML
module.exports = generateHTML;
