// functions for manipulating the blocker
var Blocker =
{
	StartBlocking : function()
	{
		blnIsBlocked = true;
		$.blockUI({ 
			centerY: 0,
			css: { 
	            border: 'none',
	            top:'100px',
	            padding: '15px', 
	            backgroundColor: '#000', 
	            '-webkit-border-radius': '10px', 
	            '-moz-border-radius': '10px', 
	            opacity: .5, 
	            color: '#fff' 
			} 
		}); 
	},
	
	StopBlocking : function()
	{
		blnIsBlocked = false;
		$.unblockUI();
	}
};