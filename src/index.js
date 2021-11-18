import "./style/style.css";
import "./components/title.js"

const input = document.querySelector('.inputValue');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const pressure = document.querySelector('.pressure');
const humidity = document.querySelector('.humidity');
const desc = document.querySelector('.desc');
const button= document.querySelector('.submitBtn');


button.addEventListener('click', (e) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=7b6dca8b1390af80b8db39b6627e5652')
    .then(response => response.json())
    .then(data => {

        const valName = data['name'];
        const valVountry = data['sys']['country'];
        const valWindSpeed = data['wind']['speed'];
        const valPressure = data['main']['pressure'];
        const valHumidity = data['main']['humidity'];
        const valDesc = data['weather'][0]['description'];
        const valTemp = data['main']['temp'];

        main.innerHTML = `${valName}, ${valVountry}`;
        wind.innerHTML = `WIND &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${valWindSpeed} m/s`;
        pressure.innerHTML = `PRESSURE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${valPressure} hPa`;
        humidity.innerHTML = `HUMIDITY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${valHumidity} %`;
        desc.innerHTML = `DESCRIPTION &nbsp;&nbsp;&nbsp;&nbsp; ${valDesc}`;
        temp.innerHTML = `${Math.round(valTemp)} &deg;C`;
        input.value ="";

    })
.catch(err => alert("Nama kota salah!"));
})