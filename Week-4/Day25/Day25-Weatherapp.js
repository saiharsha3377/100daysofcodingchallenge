async function getWeather() {
    const apiKey = 'ec5920cb54c560a9f49fa7dc1746b17e';
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}
