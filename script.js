let weatherObj = new XMLHttpRequest()
weatherObj.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19', true );

weatherObj.send();

weatherObj.onload = function() {
    let weatherInfo = JSON.parse(weatherObj.responseText);

    console.log(weatherInfo)

    document.querySelector('#place').innerHTML = weatherInfo.name
    
    document.querySelector('#temp').innerHTML = weatherInfo.main.temp
    document.querySelector('#pres').innerHTML = weatherInfo.main.pressure
    document.querySelector('#description').innerHTML = weatherInfo.weather[0].description
    document.querySelector('#humidity').innerHTML = weatherInfo.main.humidity
    document.querySelector('#speed').innerHTML = weatherInfo.wind.speed
    document.querySelector('#deg').innerHTML = weatherInfo.wind.deg
    document.querySelector('#icon').innerHTML = `<img src="http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png">`
}
