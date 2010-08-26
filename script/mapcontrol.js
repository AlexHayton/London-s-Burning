var objCurrentLatLng;
var objMapControl;

function initialisemap()
{

	// Read the lat/long from the config file if possible.
	if (objConfig)
	{
		var objMapInit = objConfig.initialcameraposition;
		objCurrentLatLng = new google.maps.LatLng(objMapInit.lat, objMapInit.lon);
	} 
	else
	{
		objCurrentLatLng = new google.maps.LatLng(0, 0);
	}

	var objOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	objMapControl = new google.maps.Map(document.getElementById("map_canvas"), objOptions);

}
  
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
}
  
window.onload = loadScript;
