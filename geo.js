var x=document.getElementById("kanaalplan");function getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):x.innerHTML="Geolocation is not supported by this browser."}function showPosition(o){var n=o.coords.latitude,e=o.coords.longitude;fetch("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox="+n+"%2C"+e+"%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=jz23R9Wi89IqwnnxZno0&app_code=g6DikMOdkOUyvGZN3kjW5A&").then(function(o){return o.json()}).then(function(o){var n=String(o.Response.View[0].Result[0].Location.Address.City).toLowerCase();fetch("./regios.json").then(function(o){return o.json()}).then(function(o){console.log(o),document.getElementById("kanaalplan").innerHTML="<b>Plaatsnaam:</b> "+o[n].CITY+"<br><b>Footprint:</b> "+o[n].Footprint+"<br><b>Rayon/regio:</b> "+o[n].Rayon+"<br><br><b>Kanaalplan:</b> "+o[n].Kanaalplan+"<br><b>Laag:</b> "+o[n].Laag+"<br><b>Midden:</b> "+o[n].Midden+"<br><b>Hoog:</b> "+o[n].Hoog+"<br><br><b>Citycode:</b> "+o[n].Citycode+"<br><b>RegioID:</b> "+o[n].RegioID+"<br><br><b>Full Digitization:</b> "+o[n].FullD})})}
