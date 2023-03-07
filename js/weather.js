
function getweather(z) {
    var req = new XMLHttpRequest();
    req.open('GET', `https://api.weatherapi.com/v1/forecast.json?key= 32e511fc823e44b3830223105232002&q=${z}&days=3`)
    req.send()
    req.addEventListener('loadend', function () {
        if (req.status == 200) {
            let res = JSON.parse(req.response);
            displayweather(res, `${z}`)
        }
    })
}
getweather('cairo');
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayweather(res, z) {
    var y = new Date(res.forecast.forecastday[0].date);
    let x = `  <div class=" col-lg-4">
                <div class="forecast">
                   <div class="forecast-header d-flex justify-content-between">
               <div class="day">${days[y.getDay()]}</div>
              <div class=" date">${y.getDate() + month[y.getMonth()]}</div>
               </div>
        <div class="forecast-content p-3 con">
            <div class="locations ps-2 pt-2">${z}</div>
            <div class=" d-flex justify-content-between align-items-center">
                <div class=" fa-6x text-white">${res.current.temp_c}<sup>o</sup>C</div>

                <div class="forecast-icon">
                    <img src="https:${res.current.condition.icon}" alt="" width="90">
                </div>

            </div>
            <div class="custom ps-2">${res.current.condition.text}</div>
            <div class=" d-flex justify-content-around w-75 mt-4">
            <span> <img src="./image/imag74.png" class="me-1" alt="">20%</span>
            <span><img src="./image/imag75.png" class="me-1" alt="">18km/h</span>
            <span><img src="./image/imag76.png" class="me-1" alt="">East</span></div>
        </div>
        </div>
        </div>
        <div class=" col-lg-4">
        <div class="forecast-header text-center two">
            <div>${days[new Date(res.forecast.forecastday[1].date).getDay()]}</div>
        </div>
        <div class=" forecast  d-flex flex-column align-items-center justify-content-center py-2">

            <div class="forecast-content my-4">
                <div class="forecast-icon text-center">
                    <img src="https:${res.forecast.forecastday[1].day.condition.icon}" alt="">
                   
                </div>
                <div class="num fs-1 text-white mt-4">${res.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
                <div class="text-center"><small>${res.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small></div>

                <div class="custom ps-2 text-center">${res.forecast.forecastday[1].day.condition.text}</div>

            </div>
        </div>
        </div>
        <div class=" col-lg-4">
        <div class="forecast-header text-center">
            <div>${days[new Date(res.forecast.forecastday[2].date).getDay()]}</div>
        </div>
        <div class=" con d-flex flex-column align-items-center justify-content-center py-2">

            <div class=" my-4" id="current">
                <div class="forecast-icon text-center">
                    <img src="https:${res.forecast.forecastday[2].day.condition.icon}" alt="">
                   
                </div>
                <div class=" fs-1 text-white mt-4">${res.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
                <div class="text-center"><small>${res.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small></div>

                <div class="custom ps-2 text-center">${res.forecast.forecastday[2].day.condition.text}</div>

            </div>
        </div>
        </div>`
    document.getElementById('mana').innerHTML = x;
}
document.getElementById('search').addEventListener('keyup', function () {

    if (this.value.length >= 3) {
        getweather(`${this.value}`)
    }
    else if (this.value == 0) {
        getweather('cairo')
    }

})
