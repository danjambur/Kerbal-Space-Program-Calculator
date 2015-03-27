$(document).ready(function()
{ 
	// Tiger-stripe tables			 
    $('table tr').hover(
        function() { $(this).addClass ('hover'); }, 
        function() { $(this).removeClass ('hover'); }
    );       
    $("table tr:odd").addClass("oddrow");  
});