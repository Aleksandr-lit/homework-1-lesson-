var node = null;
function selectFirstChild() {
	var list = document.getElementById("myUl");
	var child = list.firstChild;
	if (child != null) {
		child.setAttribute('style', 'color:blue;');
	}
}

function selectLastChild() {
	var list = document.getElementById("myUl");
	var child = list.lastChild;
	if (child != null) {
		child.setAttribute('style', 'color:blue;');
	}
}

function selectNextNode() {
	if (node == null) {
		var list = document.getElementById("myUl");
		node = list.firstChild;
		node.setAttribute('style', 'color:red;');
		return;
	}
	node = node.nextSibling;
	if (node != null) {
		node.setAttribute('style', 'color:red;');
		node.previousSibling.setAttribute('style', 'color: " "');
	}
}

function selectPrevNode() {			
	if (node == null) {
		var list = document.getElementById("myUl");
		node = list.lastChild;
		node.setAttribute('style', 'color:red;');
		return;
	}
	node = node.previousSibling;
	if (node != null) {
		node.setAttribute('style', 'color:red;');
		node.nextSibling.setAttribute('style', 'color: "black"');
	}
}

function append(form) {
	var newItem = document.createElement("li");
	newItem.innerHTML = "Новый Элемент";
	document.getElementById('myUl').appendChild(newItem);
}

function remove () {
	var mainObj = document.getElementById("myUl");
	var oneChild = mainObj.lastChild;
	mainObj.removeChild(oneChild);
}

function appendFirst(form) {
	var newItem = document.createElement("li");
	newItem.innerHTML = "Новый Элемент";
	myUl.prepend(newItem);
}