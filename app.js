const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const infoResult = document.getElementById('info')
const btn = document.getElementById('sendDate')
const dayResult = document.getElementById('dayResult');
const yearResult = document.getElementById('yearResult');
const monthResult = document.getElementById('monthResult')

day.addEventListener('input',checkInputsComplete)
month.addEventListener('input',checkInputsComplete)
year.addEventListener('input',checkInputsComplete)

function checkInputsComplete(){
    if(day.value && month.value && (year.value.length > 3)){
        calculateDate();
    }else {

    }
}

function calculateDate(){
    let dayUser = parseInt(day.value);
    let monthUser = parseInt(month.value) -1;
    let yearUser = parseInt(year.value);

    let currentDate = new Date();
    let userDate = new Date(yearUser, monthUser, dayUser);

    let diffTime = currentDate - userDate;
    let diffDate = new Date(diffTime);

    let yearDiff = diffDate.getUTCFullYear() - 1970;
    let monthDiff = diffDate.getUTCMonth();
    let dayDiff = diffDate.getUTCDay() -1;

    
    console.log(yearDiff);
    console.log(monthDiff);
    console.log(dayDiff);

    infoResult.style.display = 'block'

    yearResult.innerHTML = yearDiff;
    monthResult.innerHTML = monthDiff;
    dayResult.innerHTML = dayDiff

}