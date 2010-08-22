var objConfig;

// Make sure to define the "configloaded" function!
// We load the game config dynamically to prevent
function getConfig(strConfigFile, funcCallback)
{
	$.getJSON(strConfigFile, funcCallback);
}
