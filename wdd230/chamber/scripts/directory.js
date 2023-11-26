const url = 'https://manntrr.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const displayMembers = (members) => {
        members.forEach(member => {
            let card = document.createElement('section');
            let fullName = document.createElement('h2');
            let portrait = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let webSite = document.createElement('a');
            let level = document.createElement('p');
            let hours = document.createElement('ul');
            let Description = document.createElement('p');

            fullName.textContent = `${member.name}`;
            card.appendChild(fullName);
            portrait.setAttribute('src', `images/${member.image}`);
            portrait.setAttribute('alt', `Logo of ${member.name}`);
            portrait.setAttribute('loading', `lazy`);
            portrait.setAttribute('width', `150`);
            portrait.setAttribute('height', `90`);
            card.appendChild(portrait);
            address.textContent = member.address;
            card.appendChild(address);
            phone.textContent = member.phone;
            card.appendChild(phone);
            webSite.textContent = member.website;
            webSite.setAttribute('href', member.website);
            webSite.setAttribute('target', '_blank');
            card.appendChild(webSite);
            level.textContent = member.membershipLevel;
            card.appendChild(level);
            member.hours.forEach(line => {
                let lineItem = document.createElement('li');
                lineItem.textContent = line;
                lineItem.setAttribute('class','nonBulletedLineItem');
                hours.appendChild(lineItem);
            });
            card.appendChild(hours);
            Description.textContent = member.description;
            cards.appendChild(card);            
        });
    }
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data.members);
    }
}

getMemberData();