const api = {
  key: "de3ae3fedd79e2dda2cc12a56c76c745",
  base: "https://api.openweathermap.org/data/2.5/"
}

// const searchbox = document.querySelector('.search-box');
// searchbox.addEventListener('keypress', setQuery);

$(document).ready(function () {
	getResults("Honolulu");
	});

// function setQuery(evt) {
//   if (evt.key == 'Enter') {
//     if (searchbox.value) 
//       getResults(searchbox.value);
//     console.log(searchbox.value);
//   }
// }

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}



function displayResults(weather) {
  console.log(weather);
  // let city = document.querySelector('.location .city');
  // $('.city' ).empty();
  // city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.date');
  date.innerText = dateBuilder(now);
  let temp = document.querySelector('.temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>&deg;F`;
  let weather_el = document.querySelector('.current-condition');
  weather_el.innerText = weather.weather[0].main;
  
  let hilow = document.querySelector('.hi-low');
  hilow.innerHTML = `${Math.round(weather.main.temp_min)}<span>&deg;F / ${Math.round(weather.main.temp_max)}<span>&deg;F`;  
  
}

function dateBuilder (d) {
  let months = ["Janurary", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}


function displayLoading(loading) {
	if (loading) {
		$('.city').wrap('<div class="loader"></div>');
	} else {
		$(".city").unwrap();
	}
}
