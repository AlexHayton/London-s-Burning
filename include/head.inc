<!DOCTYPE HTML>
<html>
<head>
	<title><?php echo $title ?></title>
	<script type="text/javascript" src="lib/jquery-1.4.2.js"></script>
	<script type="text/javascript" src="script/config.js"></script>
	<script type="text/javascript" src="script/data.js"></script>
	<script type="text/javascript">
		function ConfigLoaded()
		{
			// Create local/remote database contexts.
			CreateLocalDB();

			// Start checking what's already there.
		}

		// Load the config file.
		GetConfig("config.json", ConfigLoaded);
	</script>
</head>
