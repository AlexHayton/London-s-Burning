var objDatabase;

function CreateLocalDB()
{
	objDatabase = openDatabase(objConfig.gamename, objConfig.version, "Data files for the London's Burning game " + objConfig.gamename);
}
