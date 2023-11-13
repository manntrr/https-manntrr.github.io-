const hamButton = document.querySelector('#menu');
const heroLabel = document.querySelector('#heroLabel');
const navigation = document.querySelector('.navigation');
const navigationLinks = function() {
	return document.querySelectorAll('.navigation > li > a');
}
const AddLinkListener = function(link) {
	link.addEventListner('click', (event) => {
		document.querySelector('.active').classlist.toggle('active');
		event.srcElement.classlist.toggle('active');
	});
}
const AddAllLinkListeners = function(links) {
	if(links.length > 0) {
		links.forEach( (link) => {
			AddLinkListener(link);
		});		
	};
}
const linkNavigation = function() {
	try {
		AddAllLinkListeners(navigationLinks());
	}	catch(ReferenceError) {
		void(0);
	}
};
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	heroLabel.classList.toggle('open');
});
