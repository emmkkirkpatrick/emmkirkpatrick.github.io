// Complete the following problems in JavaScript. You'll want to create an HTML page and link it to a new JavaScript file so you can view the console. Make liberal use of the console.log functionality both to test and to ouput correct answers. -->
// Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
//          Sam, Tech, Manager, 40000, true
//          Mary, Finance, Trainee, 18500, true
//          Bill, HR, Executive, 21200, false
// Create JSON for the company with the following details (companyName, website, employees)
//          Tech Stars, www.techstars.site, array of Employees
//          A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
//          Anna, Tech, Executive, 25600, false
// Given the JSON for the company, calculate the total salary for all company employees.
//          It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
//          Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
//          Working from home: ['Anna', 'Sam']
// In your JavaScript, label each problem using a comment (i.e., // Problem 1). Be sure your JavaScript solution to each problem outputs a final answer into the console -- that's how we'll grade each problem (e.g., Problem 1 will result in a console.log() output of the JSON you create).
// Push everything to GitHub, and submit a link to the HTML page that holds the JavaScript. 

// PSUEDOCODE
//  
// employee1Salary = companyData.employees[1].salary;
//  "" 
//  ""
// let totalSalary = employee1Salary + employee2Salary + employee3Salary + ...
// 

    
function calculateTotalSalary(data)
{
    let employee1Salary = Number(data.employees[0].salary);
    let employee2Salary = Number(data.employees[1].salary);
    let employee3Salary = Number(data.employees[2].salary);
    // PROBLEM 2
    let totalSalaries = employee1Salary + employee2Salary + employee3Salary;
    console.log(totalSalaries);
}

function raiseTime(data){
    for (let i; i<4; i++)
    {
        if (data.employees.raiseEligible == "true")
        {
            let eligibleSalary = data.employees[i].salary;
    // PROBLEM 3
            data.employees[i].salary = eligibleSalary * 1.1;
            
        }
        
    }
    console.log(data.employees[0,2].salary);
}
// problem 4
function wfhFlag(data) {
    data.employees["wfh"] = false;
    for (let i; i<4; i ++)
    {
    if (data.employees.firstName == "Anna" || data.employees.firstName == "Sam")
    {
        data.employees.wfh == true
    }
}
    console.log(data.employees.wfh);
}

let companyData;
    fetch ('../wa12/wa12.json')
    .then(response => response.json())
    // PROBLEM 1
    .then(data => { companyData = data;
        console.log(companyData)
        calculateTotalSalary(companyData);
        raiseTime(companyData);
        wfhFlag(companyData);
    });
    



// console.log(companyData.companyName);
// console.log(companyData.employees[1]);
 


