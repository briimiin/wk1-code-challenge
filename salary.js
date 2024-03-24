// code challenge 3

const prompt = require("prompt-sync")({ sigint: true });
function calculateNetSalary(){
    //Gets basic salary from the user
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));
   //tax rates
    const taxRate = 0.3;
    // nhif rates based on the amount of salary
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    let nhifDeduction = 0;
    // nhif rates based on the basic salary
    for (const nhifRate of nhifRates) {
        if (basicSalary >= nhifRate.min && basicSalary <= nhifRate.max) {
            nhifDeduction = nhifRate.deduction;
            break;
        }
    }
     // deductions and the gross salary
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
