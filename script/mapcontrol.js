var Map =
{
	CurrentLatLng: undefined,
	CurrentZoom: 0,
	MapObject: undefined,
	
	InitialiseMap: function()
	{
		// Read the lat/long from the config file if possible.
		var objMapInit = objConfig.initialcameraposition;
		CurrentLatLng = new google.maps.LatLng(objMapInit.lat, objMapInit.lon);
		
		CurrentZoom = parseInt(objMapInit.zoom); 
	
		var objOptions = {
			zoom: CurrentZoom,
			center: CurrentLatLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	
		try{
			MapObject = new google.maps.Map(document.getElementById("mapframe"), objOptions);
		}
		catch (objError)
		{
			Dialog.LogError(objError.message);
		}
	},

	SearchLocation: function(objCenter, strSearchString)
	{
		
	}
	
}