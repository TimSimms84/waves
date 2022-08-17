const api = {
  key: "de3ae3fedd79e2dda2cc12a56c76c745",
  base: "https://api.openweathermap.org/data/2.5/"
}

$(document).ready(function () {
	getResults("Honolulu");
  loadActivities();
	});

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
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
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}

$(document).ready(function() {
  $("#submit").click(function () {
    $(".form").empty();
    $(".form").append(`<p>Thank you for your interest, we'll get back to you soon!</p>`)
  });
});


function loadActivities() {
  const activities = ["Bow Fishing", "SCUBA", "White Whale Hunting", "Surfing", "Kayaking", "Wind Surfing", "Jetski Jousting", "Snorkeling", "3 Hour Boat Tours"]
  const shuffled = activities.sort(() => 0.5 - Math.random());
  for (let i = 0; i < 4; i++)
  {
    $(`.activity${i}`).append(`${shuffled[i]}`)
  }
}

$(document).ready(function(){
  $('.amenities-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

$(document).ready(function(){
  $('.testimonial-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
