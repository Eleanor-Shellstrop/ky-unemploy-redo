// OBJECT: PERSON APPLYING, DEFAULT VALUE

let Insuree = {
    salary: 150000
};


// OBJECT: TIER LEVEL BRACKETS FOR PAYOUT AND ASSISTANCE

let tierLevel = {
    tierOne: {
        eligiblePercentage: 1.00,
        minSalary: 1500,
        maxSalary: 29999,
        otherHelp: ['Food and grocery assistance', 'Tuition grants', 'Childcare assistance']
    },
    tierTwo: {
        eligiblePercentage: 0.80,
        minSalary: 30000,
        maxSalary: 74999,
        otherHelp: ['Food and grocery assistance']
    },
    tierThree: {
        eligiblePercentage: 0.75,
        minSalary: 75000,
        maxSalary: 99999,
        otherHelp: ['None']
    },
    tierFour: {
        eligiblePercentage: 0.70,
        minSalary: 100000,
        maxSalary: 150000,
        otherHelp: ['None']
    }
}


// RETURN TIER LEVEL FOR CALCULATIONS

const bracket = function() {
    if (Insuree.salary >= tierLevel.tierOne.minSalary && Insuree.salary <= tierLevel.tierOne.maxSalary) {
        return 'tierOne';
    } else if (Insuree.salary >= tierLevel.tierTwo.minSalary && Insuree.salary <= tierLevel.tierTwo.maxSalary) {
        return 'tierTwo';
    } else if (Insuree.salary >= tierLevel.tierThree.minSalary && Insuree.salary <= tierLevel.tierThree.maxSalary) {
        return 'tierThree';
    } else {
        return 'tierFour';
    } 
}


// CALCULATE PERCENTAGE OF SALARY FOR BENEFIT AMOUNT

const calcBenefits = function() {
    return (tierLevel[bracket()].eligiblePercentage * Insuree.salary) / 2;
}


// LOOK FOR OTHER BENEFITS

const calcOtherHelp = function() {
    return tierLevel[bracket()].otherHelp.join(', ');
}


// INSUREE SUMMARY OF BENEFITS
// inputSalary updates the default salary

const inputSalary = document.getElementById("salary");
const userSalary = parseInt(inputSalary);

//Links to HTML

const tier = document.getElementById("tier");
const payout = document.getElementById("payout");
const assistance = document.getElementById("assistance");
const ineligibile = document.getElementById("ineligible");
const home = document.getElementById("home");

//CALCULATOR FUNCTION

function getInsureeSalary(userSalary) {
    Insuree.salary = userSalary;
    if (userSalary >= 1500 && userSalary <= 150000) {
        tier.innerText = "Your benefit level is " + bracket();   
        payout.innerText = "Your estimated benefts are $" + calcBenefits() + " for a total maximum payout for the next 6 months"
        assistance.innerText = "You may be eligible for the following additional benefits: " + calcOtherHelp();    
    } else {
        ineligibile.innerText = "Unfortunately, you are not eligible for benefits at this time. Please see FAQ for eligibility."
    }
}

//BACK TO HOMEPAGE

function goHome() {
    window.location.href = "../index.html";
}

//COMMENT OUT WHEN NOT TESTING ************************************************************************************
//TESTING VARIOUS SALARIES: ELIGIBLE
/*
console.log(getInsureeSalary(25000));
console.log(getInsureeSalary(40000));
console.log(getInsureeSalary(90000));
console.log(getInsureeSalary(125000));
*/

//TESTING VARIOUS SALARIES: NOT ELIGIBLE
/*
console.log(getInsureeSalary(150));
console.log(getInsureeSalary(250000));
*/