//  let btn=document.querySelector('[data-calculate]')
//  btn.addEventListener('click', calculate)
//  let display=document.querySelector('[data-answer]')



//  function calculate()
//  {
//     let height=document.querySelector('[data-height]').value
//     let weight=document.querySelector('[data-weight]').value
//     let answer= eval(` ${weight}/Math.pow(${height},2) `)
//     display.innerHTML=answer
//  }

let btn = document.querySelector('[data-calculate]');
btn.addEventListener('click', calculate);
let display = document.querySelector('[data-answer]');

function calculate() {
// Get the values from the input fields
let heightInCentimeters = parseFloat(document.querySelector('[data-height]').value);
    let weight = parseFloat(document.querySelector('[data-weight]').value);
    // Convert height to meters (divide by 100 as 1 meter = 100 centimeters)
    let heightInMeters = heightInCentimeters / 100;
    // Check if the inputs are valid numbers and positive
    if (!isNaN(heightInMeters) && !isNaN(weight) && heightInMeters > 0 && weight > 0) {
        // Calculate BMI using the formula: BMI = weight / (height * height)
        let bmi = weight / Math.pow(heightInMeters, 2);
        // Display the result
        display.innerHTML = 'Your BMI: ' + bmi.toFixed(2);
    } else {
        // Display an error message if inputs are invalid
        display.innerHTML = 'Please enter valid height and weight.';
    }
}
















// let btn = document.querySelector('[data-calculate]');
// btn.addEventListener('click', calculate);

// let display = document.querySelector('[data-answer]');

// function calculate() {
//     let height = parseFloat(document.querySelector('[data-height]').value);
//     let weight = parseFloat(document.querySelector('[data-weight]').value);

//     if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
//         // Calculate BMI using the formula: BMI = weight / (height * height)
//         let bmi = weight / Math.pow(height, 2);
//         display.innerHTML = 'Your BMI: ' + bmi.toFixed(2);
//     } else {
//         display.innerHTML = 'Please enter valid height and weight.';
//     }
// }