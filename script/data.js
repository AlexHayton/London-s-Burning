var objDatabase;

var Data = function()
{
	this.Database = undefined;
	
	function CreateLocalDB()
	{
		this.Database = openDatabase(objConfig.gamename, objConfig.version, "Data files for the London's Burning game " + objConfig.gamename);
	}
}
