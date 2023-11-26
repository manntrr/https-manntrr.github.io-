const url = 'https://manntrr.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const displayMembers = (members) => {
        members.forEach(member => {
            let card = document.createElement('section');
            let fullName = document.createElement('h2');
            let portrait = document.createElement('img');

            fullName.textContent = `${member.name}`;
            portrait.setAttribute('src', `images/${member.imageurl}`);
            portrait.setAttribute('alt', `Logo of ${member.name}`);
            portrait.setAttribute('loading', `lazy`);
            portrait.setAttribute('width', `340`);
            portrait.setAttribute('height', `440`);

            card.appendChild(fullName);
            card.appendChild(portrait);

            cards.appendChild(card);            
        });
    }
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        //console.table(data.prophets);
        displayMembers(data.prophets);
    }
}

getMemberData();