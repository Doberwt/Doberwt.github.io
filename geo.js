var x = document.getElementById("kanaalplan");

function getLocation() {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) : x.innerHTML = "Geolocation is not supported by this browser."
}

function showPosition(o) {
    var e = o.coords.latitude,
        n = o.coords.longitude;
    fetch("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" + e + "%2C" + n + "%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=jz23R9Wi89IqwnnxZno0&app_code=g6DikMOdkOUyvGZN3kjW5A&").then(function(o) {
        return o.json()
    }).then(function(o) {
        var e = String(o.Response.View[0].Result[0].Location.Address.City).toLowerCase();
        fetch("./reg.json").then(function(o) {
            return o.json()
        }).then(function(o) {
            var y = e + '[""0""]'
            console.log(o), document.getElementById("kanaalplan").innerHTML = "<b>Plaatsnaam:</b> " + y + "<br><b>Footprint:</b> " + o[e].Footprint + "<br><b>Rayon/regio:</b> " + o[e].Rayon + "<br><br><b>Kanaalplan:</b> " + o[e].Kanaalplan + "<br><b>Laag:</b> " + o[e].Laag + "<br><b>Midden:</b> " + o[e].Midden + "<br><b>Hoog:</b> " + o[e].Hoog + "<br><br><b>Citycode:</b> " + o[e].Citycode + "<br><b>RegioID:</b> " + o[e].RegioID + "<br><br><b>Full Digitization:</b> " + o[e].FullD
        })
    })
}
