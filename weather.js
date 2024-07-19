const container = document.getElementById("container");
const searchBtn = document.getElementById("searchBtn");
const weather_image = document.getElementById("weather-image");
const temperature = document.getElementById("temp");
const desc = document.getElementById("desc");
const Humidity_percent = document.getElementById("Humidity-percent");
const wind_speed = document.getElementById("wind-speed");
const subdiv1 = document.getElementById("subdiv1");
const subdiv2 = document.getElementById("subdiv2");

searchBtn.addEventListener("click", () => {
	const searchInput = document.getElementById("searchInput").value;
	const ApiKey = "a67feb6e8c68b76f73c80d2df6ea7c6e";
	if (searchInput === "") return;

        subdiv1.classList.remove("hidden");
        subdiv2.classList.remove("hidden");
        temperature.classList.remove("hidden");

	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${ApiKey}`
	)
		.then((response) => response.json())
		.then((json) => {
			switch (json.weather[0].main) {
				case "Clear":
					weather_image.src = "clear.png";
					break;
				case "Rain":
					weather_image.src = "rain.png";
					break;
				case "Snow":
					weather_image.src = "snow.png";
					break;
				case "Clouds":
					weather_image.src = "cloud.png";
					break;
				case "Mist":
					weather_image.src = "mist.png";
					break;
				case "Haze":
					weather_image.src = "haze.png";
					break;

				default:
					weather_image.src = "earth.png";
			}
			temperature.innerHTML = `${parseInt(json.main.temp)}<sup>°C</sup>`;
			desc.innerHTML = `${json.weather[0].description}`;
			Humidity_percent.innerHTML = `${json.main.humidity}%`;
			wind_speed.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
            container.style.height = "550px";
		})
		.catch((error) => {
			weather_image.src = "404.png";
            subdiv1.classList.add("hidden");
            subdiv2.classList.add("hidden");
            temperature.classList.add("hidden");
            desc.innerHTML = "City Not Found";
            container.style.height = "350px";
			console.error("Error:", error);
		});
});
console.log(fetch);



window.onload = ()=>{
    searchInput.focus();
};
