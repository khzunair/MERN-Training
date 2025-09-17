const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityNameElement = document.getElementById('cityName');
const tempElement = document.getElementById('temperature');
const descElement = document.getElementById('description');

getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();
        console.log("City Data: ", geoData)

        if (!geoData.results || geoData.results.length === 0) {
            alert("City not found.");
            return;
        }

        const { latitude, longitude } = geoData.results[0];

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherResponse.json();

        const { temperature, weathercode } = weatherData.current_weather;
        
        const weatherDescription = getWeatherDescription(weathercode);

        cityNameElement.textContent = geoData.results[0].name;
        tempElement.textContent = `${temperature}°C`;
        descElement.textContent = weatherDescription;

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred. Please try again.");
    }
});


function getWeatherDescription(code) {
    const descriptions = {
        0: "Clear sky",
        1: "Mostly clear",
        2: "Partly cloudy",
        3: "Overcast",
    };
    return descriptions[code] || "Weather description not available";
}