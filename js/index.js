function showPic(whichPic){
	var source = whichPic.getAttribute("href");
	var palceholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}