const nameField = document.getElementById('name');
const jobSelect = document.getElementById('title');
const otherJobText = document.getElementById('other-job-role');

// give the name field focus upon loading page
nameField.focus();

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