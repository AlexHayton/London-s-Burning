var Dialog = {
		objCurrentDialog: undefined, // Internal object.
		objDialogDiv: undefined,
		
		Initiate: function()
		{
			$("#dialog").dialog({ disabled: true });
			objDialogDiv = $("#dialog");
			objDialogDiv.hide(0);
		},
		
		Dialog: function (header, text, mode, visible)
		{
			this.text = text;
			this.header = header;
			this.mode = mode;
			this.visible = visible;
			this.progress = 0;
			this.div = objDialogDiv;
			
			if (this.visible)
			{
				Visible();
			}
		},
		
		GetDialogObject: function()
		{
			return objCurrentDialog;
		},
		
		Mode: { "OK" : "OK", "OKCancel" : "OKCancel" },

		CreateDialog: function(strText, enuMode)
		{
			var objDialog = new Dialog(strText, enuMode, true);
			objCurrentDialog = objDialog;
		},
		
		LogError: function(strErrorText)
		{
			Blocker.StopBlocking();
			Dialog.CreateDialog("Error: " + strErrorText, Dialog.Mode.OK);
		}
};

// Prototype functions to enable/disable a dialog object.
Dialog.Dialog.prototype.Visible = function() 
{
	Dialog.objDialogDiv.title = this.header;
	Dialog.objDialogDiv.visible = true;
}