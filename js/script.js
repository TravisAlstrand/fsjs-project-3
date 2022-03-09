// *****************************************************************
// --SELECTORS--
// *****************************************************************

// name
const nameField = document.getElementById('name');
// job title
const jobSelect = document.getElementById('title');
const otherJobText = document.getElementById('other-job-role');
// t-shirt
const shirtDesignSelect = document.getElementById('design');
const shirtColorSelect = document.getElementById('color');
const shirtColors = document.querySelectorAll('option[data-theme]');
// activities
const activitiesField = document.getElementById('activities');
const totalCostDisplay = document.getElementById('activities-cost');
let totalCost = 0;
// payment
const paymentSelect = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
// submission
const emailField = document.getElementById('email');
const cardNumField = document.getElementById('cc-num');
const zipField = document.getElementById('zip');
const cvvField = document.getElementById('cvv');
const formElement = document.querySelector('form');
// accessibility
const activitiesArray = document.querySelectorAll('[type="checkbox"]');

// *****************************************************************
// --NAME FIELD--
// *****************************************************************

// give the name field focus upon loading page
nameField.focus();

// *****************************************************************
// --JOB TITLE--
// *****************************************************************

// hide the other job text field upon loading page
otherJobText.style.display = 'none';

// listen for selection of job title
// if 'other' is chosen, show other job text field
jobSelect.addEventListener('change', () => {
    if (jobSelect.value === 'other') {
        otherJobText.style.display = 'inherit';
    } else {
        otherJobText.style.display = 'none';
    }
});

// *****************************************************************
// --T-SHIRT--
// *****************************************************************

// disable the shirt color select upon loading page
shirtColorSelect.disabled = true;

// listen for selection of t-shirt design
shirtDesignSelect.addEventListener('change', () => {

    // enable shirt color select menu
    shirtColorSelect.disabled = false;

    // if 'js puns' design is selected
    if (shirtDesignSelect.value === 'js puns') {

        // loop through each color option
        shirtColors.forEach(option => {

            // if option is for 'js puns', show & hide others
            if (option.getAttribute('data-theme') === 'js puns') {
                option.removeAttribute('hidden');
            } else if (option.getAttribute('data-theme') === 'heart js') {
                option.setAttribute('hidden', 'hidden');
            }
        })

    // if 'heart js' design is selected
    } else if (shirtDesignSelect.value === 'heart js') {

        // loop through each color option
        shirtColors.forEach(option => {

            // if option is for 'heart js', show & hide others
            if (option.getAttribute('data-theme') === 'heart js') {
                option.removeAttribute('hidden');
            } else if (option.getAttribute('data-theme') === 'js puns') {
                option.setAttribute('hidden', 'hidden');
            }
        })
    }
});

// *****************************************************************
// --Activities--
// *****************************************************************

// listen for changes in activities selections
activitiesField.addEventListener('change', (e) => {

    // get the value of the 'data-cost' attribute on checked target
    const targetCostString = e.target.getAttribute('data-cost');

    // convert 'data-cost' value to an integer
    const targetCost = parseInt(targetCostString);

    // check if target was checked
    if (e.target.checked === true) {

        // add the cost of target to total cost variable
        totalCost += targetCost;

        // call update cost passing new totalCost
        updateCost(totalCost);

        // if target was unchecked
    } else if (e.target.checked === false) {

        // subtract the cost of target from total cost variable
        totalCost -= targetCost;

        // call update cost passing new totalCost
        updateCost(totalCost);
    }
});

// updates HTML displaying total cost of selected activities
function updateCost(total) {
    totalCostDisplay.innerHTML = `Total: $${total}`;
}

// --Activities focus states-- //

// loop through each activity checkbox
activitiesArray.forEach(activity => {

    // add focus listener on each & add .focus class to parent Label
    activity.addEventListener('focus', (e) => {
        e.target.parentNode.classList.add('focus');
    });

    // add blur listener on each & remove .focus class from parent Label
    activity.addEventListener('blur', (e) => {
        e.target.parentNode.classList.remove('focus');
    });
});

// *****************************************************************
// --Payment--
// *****************************************************************

// create array of payment options
const paymentOptions = paymentSelect.children;

// create array of payment divs
const paymentDivs = [
    'select payment placeholder',
    creditCardDiv,
    paypalDiv,
    bitcoinDiv
];

// set credit-card as default payment upon loading page
paymentOptions[1].setAttribute('selected', 'selected');

// hide the bitcoin and paypal divs initially
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

// listen for payment selection
paymentSelect.addEventListener('change', () => {

    // iterate through payment options array
    // set selected option as 'selected' remove attribute from others
    // show payment div of equal index value & hide others
    for (i = 1; i < paymentOptions.length; i++) {
        if (paymentSelect.value === paymentOptions[i].value) {
            paymentOptions[i].setAttribute('selected', 'selected');
            paymentDivs[i].style.display = 'inherit';
        } else {
            paymentOptions[i].removeAttribute('selected');
            paymentDivs[i].style.display = 'none';
        }
    }
});

// *****************************************************************
// --Submission--
// *****************************************************************

// array of input field variables
const inputFields = [
    nameField,
    emailField,
    zipField,
    cvvField
];

// check input field validities, return bool
function checkName(name) {
    return /^[a-z]+\s?[a-z]+$/i.test(name);
}

function checkEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function checkZip(zip) {
    return /^(\d{5})$/.test(zip);
}

function checkCVV(cvv) {
    return /^(\d{3})$/.test(cvv);
}

// listen for the submit event
formElement.addEventListener('submit', (e) => {

    // create variables for field values
    const userName = nameField.value;
    const userEmail = emailField.value;
    const userZip = zipField.value;
    const userCVV = cvvField.value;

    // call validator functions passing variables above
    const isValidName = checkName(userName);
    const isValidEmail = checkEmail(userEmail);
    const isValidZip = checkZip(userZip);
    const isValidCVV = checkCVV(userCVV);

    // create array of isValid variables above
    const checkedInputs = [
        isValidName,
        isValidEmail,
        isValidZip,
        isValidCVV
    ]

    // iterate through each validation checked fields
    for (i = 0; i < checkedInputs.length; i++) {

        // if an input field is not valid
        if (checkedInputs[i] === false) {

            // prevent page from reloading
            e.preventDefault();

            // find parent label of associated element
            // add not-valid class, remove valid class
            // display error hint
            inputFields[i].parentElement.classList.add('not-valid');
            inputFields[i].parentElement.classList.remove('valid');
            inputFields[i].parentElement.lastElementChild.style.display = 'inline';
        } else { 
            // if valid, do opposites of above
            inputFields[i].parentElement.classList.add('valid');
            inputFields[i].parentElement.classList.remove('not-valid');
            inputFields[i].parentElement.lastElementChild.style.display = "none";
        }
    };
});