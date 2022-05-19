
function changeSizeByBtn(size) {
    let cont = document.getElementsByClassName("fontsize");
    for (var i = 0; i < cont.length; i++) {
        var element = cont[i];
        element.style.fontSize = size;
      }
      
	
}
function changeSizeBySlider() {
	var slider = document.getElementById("slider");
	
	// Set slider value as fontSize
	cont.style.fontSize = slider.value;
}

