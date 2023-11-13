
let btn = document.querySelector('[data-calculate]');
btn.addEventListener('click', calculate);
let display = document.querySelector('[data-answer]');

function calculate() {
let heightInCentimeters = parseFloat(document.querySelector('[data-height]').value);
let weight = parseFloat(document.querySelector('[data-weight]').value);
let heightInMeters = heightInCentimeters / 100;
if (!isNaN(heightInMeters) && !isNaN(weight) && heightInMeters > 0 && weight > 0) {
let bmi = weight / Math.pow(heightInMeters, 2);
display.innerHTML = 'Your BMI: ' + bmi.toFixed(2); } 
    else {
        display.innerHTML = 'Please enter valid height and weight.';
    }
}















