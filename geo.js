var x = document.getElementById("kanaalplan");

function getLocation() {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) : x.innerHTML = "Geolocation is not supported by this browser."
}

function showPosition(o) {
    var n = o.coords.latitude,
        e = o.coords.longitude;
    fetch("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" + n + "%2C" + e + "%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=jz23R9Wi89IqwnnxZno0&app_code=g6DikMOdkOUyvGZN3kjW5A&").then(function(o) {
        return o.json()
    }).then(function(o) {
        var n = String(o.Response.View[0].Result[0].Location.Address.City).toLowerCase();
        fetch("./regios.json").then(function(o) {
            return o.json()
        }).then(function(o) {
            console.log(o), document.getElementById("kanaalplan").innerHTML = "<b>Plaatsnaam:</b> " + o[n].CITY + "<br><b>Footprint:</b> " + o[n].Footprint + "<br><b>Rayon/regio:</b> " + o[n].Rayon + "<br><br><b>Kanaalplan:</b> " + o[n].Kanaalplan + "<br><b>Laag:</b> " + o[n].Laag + "<br><b>Midden:</b> " + o[n].Midden + "<br><b>Hoog:</b> " + o[n].Hoog + "<br><br><b>Citycode:</b> " + o[n].Citycode + "<br><b>RegioID:</b> " + o[n].RegioID + "<br><br><b>Full Digitization:</b> " + o[n].FullD
        })
    })
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "https://doberwt.github.io/zend", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Zender</th><th>TS</th><th>TS ID</th><th>Frequentie</th></tr>";
  var x = xmlDoc.getElementsByTagName("FUD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("Zender")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TS")[0].childNodes[0].nodeValue +
    "</td><td>" +
         x[i].getElementsByTagName("TS_ID")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Freq")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("zenders").innerHTML = table;
}
