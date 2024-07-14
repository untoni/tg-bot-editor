const styleList = {
	w: 'width',
	h: 'height',
	x: 'left',
	y: 'top',
	o: 'opacity'
}
Element.prototype.hide = function() {
	if (this.classList.contains('active')) {
		this.classList.remove('active')
	}	this.classList.add('hide')
}
Element.prototype.active = function() {
	if (this.classList.contains('hide')) {
		this.classList.remove('hide')
	}	this.classList.add('active')
}
Element.prototype.addClass = function(newClass) {
	this.classList.add(newClass)
}
Element.prototype.removeClass = function(oldClass) {
	if (this.classList.contains(oldClass)) {
		this.classList.remove(oldClass)
	}
}
Element.prototype.setClasses = function(classes) {
	if (typeof(classes) == 'string') {
		classes = classes.split(/\s+/)
	}

	for(let c of classes) {
		this.classList.add(c)
	}
} 
Element.prototype.setSize = function(w, h) {
	if (this.tagName == 'CANVAS') {
		this.width = w
		this.height = h
	} else {
		this.style.width = w
		this.style.height = h
	}
}
Element.prototype.setStyles = function(style) {
	for(let i in style) {
		let nameStyle = styleList[i] || i
		let s = style[i]
		this.style[nameStyle] = s
	}
}
