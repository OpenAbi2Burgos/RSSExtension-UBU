var elements = document.getElementsByClassName("news-content");
for(var i=0;i<elements.length;i++){
	elements[i].addEventListener("click", function contentClick(event) {
		self.port.emit("contentClick", this.children[0].value);
	}, false);
}