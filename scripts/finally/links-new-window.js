
	
	// Open links in a new window
	$('a').each(function() {
		var a = new RegExp('/' + window.location.host + '/');
		var nb = new RegExp('/^(nbopen|netbeans):/');
		if(!a.test(this.href) && !nb) {
			$(this).click(function(event) {
				event.preventDefault();
				event.stopPropagation();
				window.open(this.href, '_blank');
			});
		}
	});