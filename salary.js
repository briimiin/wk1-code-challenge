// code challenge 3

const prompt = require("prompt-sync")({ sigint: true });
function calculateNetSalary(){
    //Gets basic salary from the user
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));
   //tax rates
    const taxRate = 0.3;
    // nhif rates based on the amount of salary
    const nhifRates = 0.025
    // nhif rates based on the basic salary

    // deductions and the gross salary
    const nhifDeduction = basicSalary * nhifRates
    const payee = basicSalary * taxRate;
    const nssfDeduction = basicSalary * 0.06;
    const grossSalary = basicSalary + benefits;
    //net salary
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
    // display the results
    console.log(`Payee (Tax): ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deductions: ${nssfDeduction.toFixed(2)}`);
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

calculateNetSalary();
