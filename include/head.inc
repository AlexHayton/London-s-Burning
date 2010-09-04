<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title ?></title>
	<!--  stylesheets -->
	<link rel="stylesheet" type="text/css" href="stylesheet/main.css" />
	<link rel="stylesheet" type="text/css" href="lib/css/dot-luv/jquery-ui-1.8.4.custom.css" />
	
	<!--  javascript -->
	<script type="text/javascript" src="lib/jquery-1.4.2.js"></script>
	<script type="text/javascript" src="lib/jquery-plugin-blockui-2.33.js"></script>
	<script type="text/javascript" src="lib/ui/jquery-ui-1.8.4.custom.js"></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript" src="script/blocker.js"></script>
	<script type="text/javascript" src="script/dialog.js"></script>
	<script type="text/javascript" src="script/config.js"></script>
	<script type="text/javascript" src="script/data.js"></script>
	<script type="text/javascript" src="script/mapcontrol.js"></script>
	<script type="text/javascript" src="script/mainthread.js"></script>
	<script type="text/javascript">
		// Triggers on document load.
		$(document).ready(function() {
			// Late-Load the google maps script. 
			//LoadScript("http://maps.google.com/maps/api/js?sensor=false&callback=initialize");
			Game.Initialise();
		});
	</script>
</head>
