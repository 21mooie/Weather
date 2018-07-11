/*jslint browser:true */
// require('./login')
import {login} from './login'
'use strict';
login('admin','radical');
var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var weatherLocation = new XMLHttpRequest();
var cObj;
var fObj;
var lObj;
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];





weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('weather').innerHTML = cObj.response["0"].periods["0"].weather
        document.getElementById('temperature').innerHTML = cObj.response["0"].periods["0"].avgTempF + degreeSymbol();

    } //end if
}; //end function






weatherLocation.responseType = 'text';
weatherLocation.onload = function(){
    if (weatherLocation.status === 200){
        lObj = JSON.parse(weatherLocation.responseText);
//        console.log(lObj);
        document.getElementById('location').innerHTML = lObj.response[0].place.name + ', ' + lObj.response[0].place.state
    }
}






weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
//	console.log(fObj);
    for (let i=1;i<4;i++){
        document.getElementById('r'+i+'c1').innerHTML = days[d.getDay()+i];
        document.getElementById('r'+i+'c2').src = '../AerisIcons/'+fObj.response["0"].periods[i].icon;
        document.getElementById('r'+i+'c3').innerHTML = fObj.response["0"].periods[1].minTempF + degreeSymbol();
        document.getElementById('r'+i+'c4').innerHTML = fObj.response["0"].periods[1].maxTempF + degreeSymbol();
    }
    
	
} //end if
}; //end function
loadWeather();

function degreeSymbol(){
    return '˚';
}

function loadWeather(){
    
    var zip=document.getElementById('zip').value;
    if (zip==='') zip = '07205';
    var forecastPath = 'https://api.aerisapi.com//forecasts/'+zip+'?client_id=NcHv0PCpZs4z1ewF6EmQB&client_secret=Inor4mEIDxWEF3bE9TFRv6xcGvoptNKEhB4v0Gze';
    
    var locationPath = 'https://api.aerisapi.com//places/closest?p='+zip+'&client_id=NcHv0PCpZs4z1ewF6EmQB&client_secret=Inor4mEIDxWEF3bE9TFRv6xcGvoptNKEhB4v0Gze';
    
    var conditionsPath = 'https://api.aerisapi.com//forecasts/'+zip+'?from=today&to=today&client_id=NcHv0PCpZs4z1ewF6EmQB&client_secret=Inor4mEIDxWEF3bE9TFRv6xcGvoptNKEhB4v0Gze';
    

    
    // GET THE CONDITIONS
weatherConditions.open('GET', conditionsPath,true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);
    
        // GET THE FORECARST    
weatherForecast.open('GET', forecastPath, true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();
    
    //Location
weatherLocation.open('GET',locationPath, true)
weatherLocation.responseType = 'text';
weatherLocation.send();

    
    
}
