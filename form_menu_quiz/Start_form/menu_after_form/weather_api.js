const nickName = document.querySelector(".container-welcome-text h1");
const cityPlace = document.querySelector('.city-information h2 ' );
const temperature = document.querySelector('.information-temaperature h3' );
const pressure = document.querySelector('.information-pressure h3' );
const weather = document.querySelector('.information-weather h3' );
const IconWeather = document.querySelector('.icon-weather i' );
const cityValue = localStorage.getItem('city');

import {APIweather} from '../fetch_API_Weather.js';


const loadNikName = () => {

    nickName.textContent = localStorage.getItem('nickName');

}


const upperFirstLetterCity = () => {
    
    const city = localStorage.getItem('city');
    const firstBigLetter = String(city).charAt(0).toUpperCase();
    const removeSecoundLetter = String(city).slice(1);
    cityPlace.textContent = `${firstBigLetter}${removeSecoundLetter}`;

}

const getWeather = () => {
    
    const URL = APIweather.API_LINK + cityValue + APIweather.API_KEY + APIweather.API_UNITS;
    axios.get(URL).then(res => {
        
        const status = Object.assign({}, ...res.data.weather);
        const temp = Math.floor( res.data.main.temp);
        const press = Math.floor( res.data.main.pressure);
        
        weather.textContent = `${status.main}`;
        temperature.textContent = `${temp} °C`;
        pressure.textContent = `${press} bar`;
        changeIcon(status);
        
    })
}

const changeIcon = status => {
    
    if(status.id >= 801) { IconWeather.className = 'fa-solid fa-cloud-sun fa-8x' };

    if(status.id === 800) { IconWeather.className = 'fa-solid fa-sun fa-8x'};

    if(status.id >= 701 && status.id <= 781 ) { IconWeather.className = 'fa-solid fa-bars-staggered fa-8x'};

    if(status.id >= 600 && status.id <= 622  ) { IconWeather.className = "fa-solid fa-snowflake fa-8x" };

    if(status.id >= 500 && status.id <= 531  ) { IconWeather.className = 'fa-solid fa-cloud-sun-rain fa-8x' };

    if(status.id >= 300 && status.id <= 321  ) { IconWeather.className = 'fa-solid fa-cloud-showers-heavy fa-8x' };

    if(status.id >= 200 && status.id <= 232  ) { IconWeather.className = 'fa-solid fa-cloud-bolt fa-8x' };   
}

loadNikName();
upperFirstLetterCity();
getWeather();