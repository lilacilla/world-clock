function updateTime() {
  //LA
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let losAngelesIconChange =
      losAngelesElement.querySelector(".daylight-icon");
    if (losAngelesTime.format("h:mm:ss [<small>]A[</small>]").includes("AM")) {
      losAngelesIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_day </span>`;
    } else {
      losAngelesIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_night </span>`;
    }
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let parisIconChange = parisElement.querySelector(".daylight-icon");
    if (parisTime.format("h:mm:ss [<small>]A[</small>]").includes("AM")) {
      parisIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_day </span>`;
    } else {
      parisIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_night </span>`;
    }
  }

  // Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");
    singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
    console.log(singaporeTime);
    let singaporeIconChange = singaporeElement.querySelector(".daylight-icon");
    if (singaporeTime.format("h:mm:ss [<small>]A[</small>]").includes("AM")) {
      singaporeIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_day </span>`;
    } else {
      singaporeIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_night </span>`;
    }
  }

  // Jamaica
  let jamaicaElement = document.querySelector("#jamaica");
  if (jamaicaElement) {
    let jamaicaDateElement = jamaicaElement.querySelector(".date");
    let jamaicaTimeElement = jamaicaElement.querySelector(".time");
    let jamaicaTime = moment().tz("America/Jamaica");
    jamaicaDateElement.innerHTML = jamaicaTime.format("MMMM Do YYYY");
    jamaicaTimeElement.innerHTML = jamaicaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
    console.log(jamaicaTime);
    let jamaicaIconChange = jamaicaElement.querySelector(".daylight-icon");
    if (jamaicaTime.format("h:mm:ss [<small>]A[</small>]").includes("AM")) {
      jamaicaIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_day </span>`;
    } else {
      jamaicaIconChange.innerHTML = `<span class="material-symbols-outlined"> clear_night </span>`;
    }
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");

  if (cityTime.format("h:mm:ss [<small>]A[</small>]").includes("AM")) {
    citiesElement.innerHTML = `
  <div class="city">
        
            
             <div class="daylight-icon" id="daylight-icon">
            <span class="material-symbols-outlined"> clear_day </span>
            
          </div>
          <div class="city-details">

            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div>
  <a href="/" class="city-link">Reset</a>
  
  `;
  } else {
    citiesElement.innerHTML = `
  <div class="city">
                      
             <div class="daylight-icon" id="daylight-icon">
            
            <span class="material-symbols-outlined"> clear_night </span>
          </div>
          <div class="city-details">

            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div>
  <a href="/" class="city-link">Reset</a>
  
  `;
  }
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
