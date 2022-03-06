const nameField = document.getElementById('name');

const jobSelect = document.getElementById('title');
const otherJobText = document.getElementById('other-job-role');

const shirtDesignSelect = document.getElementById('design');
const shirtColorSelect = document.getElementById('color');
const shirtColors = document.querySelectorAll('option[data-theme]');

const activitiesField = document.getElementById('activities');
const totalCostDisplay = document.getElementById('activities-cost');
let totalCost = 0;

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