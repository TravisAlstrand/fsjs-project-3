const nameField = document.getElementById('name');
const jobSelect = document.getElementById('title');
const otherJobText = document.getElementById('other-job-role');
const shirtDesignSelect = document.getElementById('design');
const shirtColorSelect = document.getElementById('color');
let shirtColors = document.querySelectorAll('option[data-color]');

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
// --T-SHIRT--
// *****************************************************************