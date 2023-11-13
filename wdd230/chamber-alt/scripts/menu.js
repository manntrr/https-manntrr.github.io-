const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.menuItem');

hamButton.nodeValue = "";
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
menuItems.forEach((menuItem) => {
	menuItem.addEventListener('click', () => {
			document.querySelector('.active').classList.toggle('active');
			menuItem.classList.toggle('active');
	});
});