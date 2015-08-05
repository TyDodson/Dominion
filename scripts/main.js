	function toggleOverlay(){
		var overlay = document.getElementById('overlay');
		var specialBox = document.getElementById('specialBox');
		overlay.style.opacity = .8;
		if(overlay.style.display == "block"){
			overlay.style.display = "none";
			specialBox.style.display = "none";
			window.setTimeout("toggleOverlay()",3000);
		} else {
			overlay.style.display = "block";
			specialBox.style.display = "block";
			specialBox.style.transform = "translate(0,0)";
			window.setTimeout("slider()",10);
			window.setTimeout("toggleOverlay()",5000);
			}
	}
	function slider() {
	specialBox.style.transform = "translate(-70vw,0)";
	}