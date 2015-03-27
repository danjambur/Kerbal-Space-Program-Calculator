$(document).ready (function () {
	var ratio = window.devicePixelRatio;
	
	if (ratio > 1) {
		enable_retina (ratio);
	}

	function enable_retina (ratio)
	{
		$('img').each (function () {
			
			filename = $(this).attr ('src');
			
			var regex = /^(.+)\/image\/([^\/]+)\/([^\/]+)$/;
			
			var match = regex.exec (filename);
			
			var $parent = this;
			
			if (match && match[1] && match[2] && match[3]) {
				
				console.log ('Queueing replace on filename '+ filename);
				
				$(this).load (function () {
				
					var width = $(this).width (),
						height = $(this).height ();

					var new_width = width * ratio,
						new_height = height * ratio;

					var newfilename = match[1] + '/image/' + new_width +'x'+ new_height +'/' +match[3];
				
					$($parent).attr ('width', width);
					$($parent).attr ('height', height);
					
					if (width > 1000 || height > 1000)
					{
						// trim down the heights
					}
					$($parent).attr ('src', newfilename);
					console.log ('Doing replace on filename '+ filename+ ' to '+ newfilename);
					
					$(this).unbind ();
				});
			} else {
				console.log ('No matches on '+filename);
			}
		})
	}
})