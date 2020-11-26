const weatherForm = document.querySelector('form');
const search = document.getElementById('text');
const result = document.getElementById('result');

weatherForm.addEventListener('submit', (e) => {

    const location = search.value;

    e.preventDefault()
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                result.innerHTML = data.error;
            } else {
                result.innerHTML = "Current temperature in " + location + " is: " + data.forecast.temperature + ". But it Feels Like it's: " + data.forecast.feelslike + "<br>" + data.forecast.desc;
            }
        })
    })
})