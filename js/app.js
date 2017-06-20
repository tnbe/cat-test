var Cat = function () {
	// body...
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.imgAttribution = ko.observable('123');
	this.nicknames = ko.observableArray(["Tabtab","T-Bone","Mr.T","Tab","123"]);

	this.title = ko.computed(function () {
		// body...
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 20) {
			title = 'Infant';
		} else if (clicks < 30) {
			title = 'Child';
		} else if (clicks < 40) {
			title = 'Teen';
		} else if (clicks < 50) {
			title = 'Adult';
		} else  {
			title = 'Ninia';
		}
		return title;
	}, this);
}
var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function (){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	}
	console.dir(this.currentCat().nicknames());

}
ko.applyBindings( new ViewModel());








