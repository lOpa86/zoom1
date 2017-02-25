function id(id)  {
	return document.getElementById(id);
}

// габариты эл-та
function getSize(elem)  {
	var border = elem.getBoundingClientRect();
	var width = border.right - border.left;
	var height = border.bottom - border.top;

	return {'width': width, 'height': height};
}

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}


var frame = id('wrap');
frame.onmousemove = function(e) {
	// var posX = e.clientX;
	// var posY = e.clientY;
	// console.log('x = ' + posX);
	// console.log('y = ' + posY);
}

frame.onclick = function(e) {
	
	console.log(e.clientX);

	// console.log(getSize(frame));
}

// document.onmousemove = function(e) {
// 	console.log(e.clientX);
// }

// document.onclick = function(e) {
// 	console.log(e.clientX);
// }