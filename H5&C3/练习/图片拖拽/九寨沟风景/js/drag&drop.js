function drag(e){
	e.dataTransfer.setData('temp',e.target.id)
}
function dragover(e){
	e.preventDefault();
}
 function drop(e){
 	e.preventDefault();
 	var dragImage = e.dataTransfer.getData('temp');
 	var dropImage=document.getElementById(dragImage);
 	e.target.appendChild(dropImage)
 }
