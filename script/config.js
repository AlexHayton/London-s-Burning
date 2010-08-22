var objConfig;

// Make sure to define the "configloaded" function!
// We load the game config dynamically to prevent
function GetConfig(strConfigFile, funcCallback)
{
	// Define an internal function to handle the config 
	function ProcessConfig(objData, strStatus)
	{
		// Save the data away to the global config object.	
		objConfig = objData;
		funcCallback();
	}
	$.getJSON(strConfigFile, ProcessConfig);
}
