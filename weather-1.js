const changeMode = () => {
    let mybody = document.body;
    //The classList property returns the CSS classnames of an element.
    mybody.classList.toggle("new");
  };

  let x=document.getElementById("search_loc");
  let y=document.getElementById("curr-weather");
  let z=document.getElementById("temp-req");
  let a=document.getElementById("location");
  let b=document.getElementById("moisture");
  let t=document.getElementById("tod");
  let l=document.getElementById("per-1");
  let m=document.getElementById("per-2");
  let n=document.getElementById("per-3");
  let f=document.getElementById("sunrise-1");
  let u=document.getElementById("sunset");
  let s=document.getElementById("search_loc");


  
  let x_1=document.getElementById("search_loc");
  let y_1=document.getElementById("curr-weather");
  let z_1=document.getElementById("temp-req");
  let a_1=document.getElementById("location");
  let b_1=document.getElementById("moisture");
  let t_1=document.getElementById("tod");
  let l_1=document.getElementById("per-1");
  let m_1=document.getElementById("per-2");
  let n_1=document.getElementById("per-3");
 
 
  function geolocation_1(){
   if(navigator.geolocation)
   {
    navigator.geolocation.getCurrentPosition(showPosition_1);
   }
   else{
    a.innerText="Null";
   }
  }

  function showPosition_1(data){
    console.log(data); 
    let lati=data.coords.latitude;
    let long=data.coords.longitude;
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&cnt=7&units=imperial&appid=019c012e8e9bcdc7c84a82c0bf685c83`;

  fetch(url, { method: "GET" })
  //return promise
  .then((data) => data.json())
  .then((res) => {
    console.log("Weather data", res);
    z_1.innerText = `Temp of the day is ${res.main.temp}`;
    a_1.innerText = ` ${res.name}`;
    y_1.innerText=` ${res.weather[0].main} `;
    let p=res.main.humidity;
    if(p>100)
    {
     b_1.innerText=`high`;
    }
    else if(p>70 && p<=100){
    b_1.innerText=`Mod`;
    }
    else{
     b_1.innerText=`Low`;
    }
  l_1.innerText=`${res.main.pressure}`;
  m_1.innerText=`${res.main.humidity}`;
  n_1.innerText=`${res.wind.speed}`;
 // f.innerText=`Sunrise ${res.sys.sunrise}`;
//  u.innerText=`Sunset ${res.sys.sunset*1000}`;


  
  });
  }
 geolocation_1();
  //s="bareilly";
  //console.log("search=>" + " " + s);
  function geolocation(){
    showPosition(s.value);
  
   
  }

  function showPosition(city){
    console.log(city);
   // let lati=data.coords.latitude;
   // let long=data.coords.longitude;
//const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&cnt=7&units=imperial&appid=019c012e8e9bcdc7c84a82c0bf685c83`;
const url=`https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${city}`;
//const url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=lati&lon=long&cnt=16&appid=b201a18ce1cea5e53519b56e856cd894`;
  fetch(url, { method: "GET" })
  //return promise
  .then((res) => res.json())
 // console.log( data.json())
  .then((res) => {
    console.log("Weather data", res);
   // console.log(res.current.temp_f)
    z.innerText = `Temp of the day is ${res.current.temp_f} `;
    
    a.innerText = ` ${res.location.name}`;
    b.innerText=`${res.current.precip_mm}%`;
   y.innerText=` ${res.current.condition.text} `;
   // let p=res.main.humidity;
    // b.innerText=`${res.condition.precip_mm}`;
     
  
  l.innerText=`${res.current.pressure_in
  }`;
  m.innerText=`${res.current.humidity}`;
  n.innerText=`${res.current.wind_kph
  }kmp`;
  f.innerText=`Sunrise ${res.sys.sunrise}`;
  u.innerText=`Sunset ${res.sys.sunset*1000}`;


    // console.log("Weather data", res.name);
    // console.log("Weather data", res.weather[0].main);
  });
  }

  




  
   let d=String(new Date());

   console.log(d);
   let d_1=d.slice(4,10);
  // let t=document.getElementById("tod");

   t.innerText=`${d_1}`;
   const day=new Date().getDay();
   console.log(day);  
   const day_1=new Date().getDate();
   console.log(day_1);  