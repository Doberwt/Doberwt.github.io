var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
 var y =  position.coords.latitude
 var u = position.coords.longitude;
  
  fetch('https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox='+ y + '%2C' + u + '%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=jz23R9Wi89IqwnnxZno0&app_code=g6DikMOdkOUyvGZN3kjW5A&')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

var stad = String(myJson.Response.View[0].Result[0].Location.Address.City)

var stadl = stad.toLowerCase()

fetch('https://api.npoint.io/72c4ec18c2c603f98365')
  .then(function(ding) {
    return ding.json();
  })
  .then(function(lookUp) {
  console.log(lookUp)
  

    document.getElementById("demo").innerHTML = '<b>Plaatsnaam:</b> ' + lookUp[stadl].CITY + "<br>" +
    '<b>Footprint:</b> ' + lookUp[stadl].Footprint + "<br>" +
        '<b>Rayon/regio:</b> ' + lookUp[stadl].Rayon + "<br><br>" +
    '<b>Kanaalplan:</b> ' + lookUp[stadl].Kanaalplan + "<br>" +
    '<b>Laag:</b> ' + lookUp[stadl].Laag + "<br>" +
        '<b>Midden:</b> ' + lookUp[stadl].Midden + "<br>" +
            '<b>Hoog:</b> ' + lookUp[stadl].Hoog + "<br><br>" +
                '<b>Citycode:</b> ' + lookUp[stadl].Citycode + "<br>" +
                '<b>RegioID:</b> ' + lookUp[stadl].RegioID + "<br><br>" +
                       '<b>Full Digitization:</b> ' + lookUp[stadl].FullD
                
    
})  



})
  

  
  
  
}


