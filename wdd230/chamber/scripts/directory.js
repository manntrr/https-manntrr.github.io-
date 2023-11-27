const url = 'https://manntrr.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

/*
    https://icons8.com/icon/set/list-view/small
*/
async function getMemberData() {
    const displayMembers = (members) => {
        let control = document.createElement('div');
        let gridButton = document.createElement('input');
        let gridImage = document.createElement('img');
        let listButton = document.createElement('input');
        let listImage = document.createElement('img');
        control.setAttribute('class','directoryControl');
        gridButton.setAttribute('class','directoryControl');
        gridImage.setAttribute('class','directoryControl');
        listButton.setAttribute('class','directoryControl');
        listImage.setAttribute('class','directoryControl');

        gridImage.setAttribute('src','images/grid-view-icon.png');
        gridImage.setAttribute('alt','Grid View Icon');
        listImage.setAttribute('src','images/list-view-icon.png');
        listImage.setAttribute('alt','List View Icon');

        gridButton.appendChild(gridImage);
        listButton.appendChild(listImage);
        control.appendChild(gridButton);
        control.appendChild(listButton);
        cards.appendChild(control);
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
            portrait.setAttribute('src', `images/${member.image}`);
            portrait.setAttribute('alt', `Logo of ${member.name}`);
            portrait.setAttribute('loading', `lazy`);
            portrait.setAttribute('width', `120`);
            portrait.setAttribute('height', `60`);
            portrait.setAttribute('class','directoryCardPortrait');
            level.textContent = `membership:  ${member.membershipLevel}`;
            level.setAttribute('class','directoryCardMemberLevel');
            address.textContent = member.address;
            address.setAttribute('class','directoryCardAddress');
            phone.textContent = member.phone;
            phone.setAttribute('class','directoryCardPhone');
            webSite.textContent = member.website;
            webSite.setAttribute('href', member.website);
            webSite.setAttribute('target', '_blank');
            webSite.setAttribute('class', 'directoryCardAnchor');
            member.hours.forEach(line => {
                let lineItem = document.createElement('li');
                lineItem.textContent = line;
                lineItem.setAttribute('class','nonBulletedLineItem');
                hours.appendChild(lineItem);
            });
            Description.textContent = member.description;

            card.appendChild(fullName);
            card.appendChild(portrait);
            card.appendChild(level);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(webSite);
            card.appendChild(hours);

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