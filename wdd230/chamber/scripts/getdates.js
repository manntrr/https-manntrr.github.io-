/*fetch('https://ipv4.ipleak.net/?mode=ajax')
.then(x => x.text())
.then(y => { document.querySelector('#ipleakA').textContent = y });
fetch('https://ipv4.ipleak.net/?mode=json')
.then(x => x.text())
.then(y => { document.querySelector('#ipleakJ').textContent = y });*/

/*let results = async function() { await fetch('https://ipv4.ipleak.net/?mode=ajax'); }*/
// set current year in footer
const currentDate = new Date();

document.querySelector('#year').textContent = currentDate.getFullYear();

document.querySelector('#modification').textContent = document.lastModified;

/*document.querySelector('#ipleakA').textContent = results();*/

/*ajaxResult = document.querySelector('#ipleakA').textContent;*/
/*jsonResult = document.querySelector('#ipleakJ').textContent;*/