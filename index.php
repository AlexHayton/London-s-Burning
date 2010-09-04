<?php
	$title = "London's Burning";
	include "include/head.inc";
	
	DEFINE("TOP_MENU_HEIGHT", 75); // Px
	DEFINE("TOP_MENU_BORDER", 5); // Px
	DEFINE("LEFT_MENU_WIDTH", 250); // Px
	DEFINE("LEFT_MENU_SPLIT", 60); // %
?>
<BODY>
	<div id=loading style="z-index: 1; position: absolute; height:100%; top: 0px; width: 100%; left: 0px; background-color: black; text-align: center; vertical-align: middle; text-color:red">
		<span id=mainprogress>Loading</span>
	</div>

	<!-- Menu bar -->
	<div id=menuframe style="margin: 0px; height: <?php echo TOP_MENU_HEIGHT ?>px; width: 100%; background-color: yellow; border-style: solid; border-width: <?php echo TOP_MENU_BORDER ?>px; border-color: green;">
		<h1>Test map page</h1>
	</div>
	
	<!-- Map view -->
	<DIV id=mapframe style="position: absolute; height: 100%; top: <?php echo TOP_MENU_HEIGHT + 2*(TOP_MENU_BORDER) ?>px; left: <?php echo LEFT_MENU_WIDTH ?>px; width: 100%; border-style: dashed; border-width: 1px; background-color: red;">&nbsp;</DIV>	
	
	<!-- Selection Div -->
	<DIV style="position:absolute; left: 0px; top: <?php echo TOP_MENU_HEIGHT + 2*(TOP_MENU_BORDER)?>px; height: 100%; width: <?php echo LEFT_MENU_WIDTH ?>px;">
		<DIV id=selectionframe style="position:relative; height: <?php echo LEFT_MENU_SPLIT ?>%; width: 100%; border-style: dotted; border-width: 1px; ">&nbsp;</DIV>
	
		<!-- Mini view div -->
		<DIV id=miniframe style="position:relative; height: <?php echo (100 - LEFT_MENU_SPLIT) ?>%; width:100%;>&nbsp;</DIV>
	</DIV>
	
	<div id="dialog" title="Basic dialog" style="display:none;">
		<p style="display:none;">This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
	</div>
</BODY>
</HTML>
