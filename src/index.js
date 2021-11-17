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


button.addEventListener('click', function(e){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=7b6dca8b1390af80b8db39b6627e5652')
    .then(response => response.json())
    .then(data => {
        main.innerHTML = data['name'] + ', ' + data['sys']['country'];
        wind.innerHTML = "WIND &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data['wind']['speed']+" m/s";
        pressure.innerHTML = "PRESSURE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data['main']['pressure']+" hPa";
        humidity.innerHTML = "HUMIDITY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data['main']['humidity']+" %";
        desc.innerHTML = "DESCRIPTION &nbsp;&nbsp;&nbsp;&nbsp;"+data['weather'][0]['description'];
        temp.innerHTML = Math.round(data['main']['temp']) + ' &deg;C';
        input.value ="";

    })
.catch(err => alert("Nama kota salah!"));
})