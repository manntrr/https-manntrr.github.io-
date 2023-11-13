const baseURL = "https://trrmann.github.io/wdd230/";
const linksURL = "https://trrmann.github.io/wdd230/data/links.json";
const activities = document.querySelector('#activities');

async function getLinks() {
    const response = await fetch(linksURL);
    if(response.ok) {
        const data = await response.json();
        const displayLinks = (lessons) => {
            let headline = document.createElement('h3');
            headline.textContent = "Learning Activities";
            let list = document.createElement('ol');
            lessons.forEach(lesson => {
                let listItem = document.createElement('li');
                listItem.setAttribute('value',lesson.lesson);
                let listSubSubItem = document.createElement('div');
                let linkCounter = 0;
                lesson.links.forEach(link => {
                    let linkAnchor = document.createElement('a');
                    linkAnchor.setAttribute('href',link.url);
                    linkAnchor.setAttribute('target','_blank');
                    linkAnchor.textContent = `${link.title}`;
                    listSubSubItem.appendChild(linkAnchor);
                    linkCounter += 1;
                    if(linkCounter < lesson.links.length) {
                        let padText = document.createElement('p');
                        padText.textContent = " | ";
                        listSubSubItem.appendChild(padText);
                    }
                });
                listItem.appendChild(listSubSubItem);
                list.appendChild(listItem);
            });
            activities.appendChild(headline);
            activities.appendChild(list);
        };
        displayLinks(data.lessons);
    }
}

getLinks();