const APIKEY = "92002a6a018be364c3e0c52d1a328749";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city = "Dhaka") {
  try {
    const response = await fetch(
      apiUrl + city + `&appid=${APIKEY}`
    );

    if (!response.ok) {
      alert("City not found!");
      return;
    }

    const data = await response.json();

    document.querySelector(".city").textContent =
      data.name;

    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").textContent =
      data.main.humidity + "%";

    document.querySelector(".wind").textContent =
      data.wind.speed + " km/h";

  } catch (error) {
    console.error(error);
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();

  if (city !== "") {
    checkWeather(city);
  }
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const city = searchBox.value.trim();

    if (city !== "") {
      checkWeather(city);
    }
  }
});

checkWeather();
