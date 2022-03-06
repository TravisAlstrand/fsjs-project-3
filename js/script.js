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

// disable the shirt color select upong loading page
shirtColorSelect.disabled = true;

// listen for selection of t-shirt
shirtDesignSelect.addEventListener('change', () => {
    // enable shirt color select menu
    shirtColorSelect.disabled = false;

    if (shirtDesignSelect.value === 'js puns') {
        shirtColors.forEach(option => {
            if (option.getAttribute('data-theme') === 'js puns') {
                option.removeAttribute('hidden');
            } else if (option.getAttribute('data-theme') === 'heart js') {
                option.setAttribute('hidden', 'hidden');
            }
        })
    } else if (shirtDesignSelect.value === 'heart js') {
        shirtColors.forEach(option => {
            if (option.getAttribute('data-theme') === 'heart js') {
                option.removeAttribute('hidden');
            } else if (option.getAttribute('data-theme') === 'js puns') {
                option.setAttribute('hidden', 'hidden');
            }
        })
    }
});