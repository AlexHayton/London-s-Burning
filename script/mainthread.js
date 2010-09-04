const ConfigFileName = "config.json"; 

// All game initialisation loop logic here!
var Game = 
{
	Initialise: function()
	{
		// Stop any user input while we sort things out.
		Blocker.StartBlocking();
		
		// Initiate the dialog object
		Dialog.Initiate();
		
		// Get the config file. This is asynchronous.
		Config.LoadConfig(ConfigFileName, GotConfig);
		function GotConfig()
		{
			// Update progress bar
			//TODO
			
			// Change the window's title.
			document.title = Config.GetConfig().gamename;
			
			// Render the map now.
			Map.InitialiseMap();
			
			// Hide the main blocker page.
			Blocker.StopBlocking();
			$("#loading").fadeOut(500).hide(0);
		}
	},
};

//For dynamic loading of javascript
function LoadScript(src) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  $(document).ready(function() {
	  document.body.appendChild(script);
  });
};

// Step 3: Config is loaded. Begin starting the map etc.
function ConfigLoaded()
	{
		// Create local/remote database contexts.
		Data.CreateLocalDB();

		// Start checking what's already there.
	}