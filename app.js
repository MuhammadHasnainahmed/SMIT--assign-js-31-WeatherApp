let cityName = document.getElementById("cityName");
let show = document.getElementById('show')
async function submit() {
    let cityValue = cityName.value;
    // let apikey = '2e0f688d180440658d1172000250807';
    let url = `http://api.weatherapi.com/v1/current.json?key=2e0f688d180440658d1172000250807&q=${cityValue}&aqi=no`;
     try {
         let res = await fetch(url);
         let data = await res.json()
        //  console.log(data.current.temp_c);
        //  console.log(data.current.condition.text);
        show.innerHTML = `
         <h1>${data.location.name}</h1>
         <h2>${data.current.temp_c}</h2>
         <h3>${data.current.condition.text}</h3>
        `


     } catch (error) {
        show.innerHTML = `
        <h1>City not found</h1>`
         
     }

     cityName.value = "";

    
}