var x=document.getElementById("demo");function getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(showPosition):x.innerHTML="Geolocation is not supported by this browser."}function showPosition(o){var e=o.coords.latitude,n=o.coords.longitude;fetch("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox="+e+"%2C"+n+"%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=jz23R9Wi89IqwnnxZno0&app_code=g6DikMOdkOUyvGZN3kjW5A&").then(function(o){return o.json()}).then(function(o){var e=String(o.Response.View[0].Result[0].Location.Address.City).toLowerCase();fetch("https://api.npoint.io/72c4ec18c2c603f98365").then(function(o){return o.json()}).then(function(o){console.log(o),document.getElementById("demo").innerHTML="<b>Plaatsnaam:</b> "+o[e].CITY+"<br><b>Footprint:</b> "+o[e].Footprint+"<br><b>Rayon/regio:</b> "+o[e].Rayon+"<br><br><b>Kanaalplan:</b> "+o[e].Kanaalplan+"<br><b>Laag:</b> "+o[e].Laag+"<br><b>Midden:</b> "+o[e].Midden+"<br><b>Hoog:</b> "+o[e].Hoog+"<br><br><b>Citycode:</b> "+o[e].Citycode+"<br><b>RegioID:</b> "+o[e].RegioID+"<br><br><b>Full Digitization:</b> "+o[e].FullD})})}
