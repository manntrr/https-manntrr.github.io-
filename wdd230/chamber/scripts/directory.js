const url = 'https://manntrr.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');
var gridActive = true;
const directoryBody = document.querySelector('directoryBody');

async function getMemberData() {
    const response = await fetch(url);
    /*
        https://icons8.com/icon/set/list-view/small
    */
    let control = document.createElement('div');
    let gridButton = document.createElement('button');
    let gridImage = document.createElement('img');
    let listButton = document.createElement('button');
    let listImage = document.createElement('img');
    control.setAttribute('class','directoryControl');
    gridButton.setAttribute('class','directoryGridButton');
    gridButton.setAttribute('value',gridActive);
    listButton.setAttribute('class','directoryListButton');
    listButton.setAttribute('value',!gridActive);
    if(gridActive) {
        gridButton.classList.toggle('directoryControlSelected');
    } else {
        listButton.classList.toggle('directoryControlSelected');
    }
    gridButton.addEventListener('click', () => {
        gridActive = true;
        cards.innerHTML="";
        getMemberData();
    });
    listButton.addEventListener('click', () => {
        gridActive = false;
        cards.innerHTML="";
        getMemberData();
    });

    gridImage.setAttribute('class','directoryGridImage');
    gridImage.setAttribute('src','images/grid-view-icon.png');
    gridImage.setAttribute('alt','Grid View Icon');
    listImage.setAttribute('class','directoryListImage');
    listImage.setAttribute('src','images/list-view-icon.png');
    listImage.setAttribute('alt','List View Icon');

    gridButton.appendChild(gridImage);
    listButton.appendChild(listImage);
    control.appendChild(gridButton);
    control.appendChild(listButton);
    cards.appendChild(control);

    const displayMembersCard = (members) => {
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

            card.setAttribute('class','directoryCard');
            fullName.setAttribute('class','directoryCardHeading');
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

    const displayMembersList = (members, columns) => {
        let table = document.createElement('table');
        let tableHeader = document.createElement('thead');
        let tableHeaderRow = document.createElement('tr');
        let tableHeaderNameColumn = document.createElement('th');
        let tableHeaderAddressColumn = document.createElement('th');
        let tableHeaderPhoneColumn = document.createElement('th');
        let tableHeaderWebsiteColumn = document.createElement('th');
        let tableHeaderLevelColumn = document.createElement('th');
        let tableHeaderHoursColumn = document.createElement('th');
        let tableHeaderDescriptionColumn = document.createElement('th');
        let tableBody = document.createElement('tbody');
        table.setAttribute('class','directoryTable');
        tableHeaderRow.setAttribute('class','directoryHeaderRow, directoryRow');
        /*tableHeaderNameColumn.setAttribute('colspan',"1");*/
        tableHeaderNameColumn.setAttribute('scope',"col");
        /*tableHeaderAddressColumn.setAttribute('colspan',"1");*/
        tableHeaderAddressColumn.setAttribute('scope',"col");
        /*tableHeaderPhoneColumn.setAttribute('colspan',"1");*/
        tableHeaderPhoneColumn.setAttribute('scope',"col");
        /*tableHeaderWebsiteColumn.setAttribute('colspan',"1");*/
        tableHeaderWebsiteColumn.setAttribute('scope',"col");
        /*tableHeaderLevelColumn.setAttribute('colspan',"1");*/
        tableHeaderLevelColumn.setAttribute('scope',"col");
        /*tableHeaderHoursColumn.setAttribute('colspan',"1");*/
        tableHeaderHoursColumn.setAttribute('scope',"col");
        /*tableHeaderDescriptionColumn.setAttribute('colspan',"1");*/
        tableHeaderDescriptionColumn.setAttribute('scope',"col");
        switch(columns) {
            case 1:
                tableHeaderNameColumn.textContent = "Member";
                tableHeaderRow.appendChild(tableHeaderNameColumn);
              break;
            case 2:
                tableHeaderNameColumn.textContent = "Name";
                tableHeaderAddressColumn.textContent = "Address";
                tableHeaderRow.appendChild(tableHeaderNameColumn);
                tableHeaderRow.appendChild(tableHeaderAddressColumn);
              break;
            case 4:
                tableHeaderNameColumn.textContent = "Name";
                tableHeaderAddressColumn.textContent = "Address";
                tableHeaderHoursColumn.textContent = "Hours";
                tableHeaderDescriptionColumn.textContent = "Description";
                tableHeaderRow.appendChild(tableHeaderNameColumn);
                tableHeaderRow.appendChild(tableHeaderAddressColumn);
                tableHeaderRow.appendChild(tableHeaderHoursColumn);
                tableHeaderRow.appendChild(tableHeaderDescriptionColumn);
              break;
            default:
                tableHeaderNameColumn.textContent = "Name";
                tableHeaderAddressColumn.textContent = "Address";
                tableHeaderPhoneColumn.textContent = "Phone";
                tableHeaderWebsiteColumn.textContent = "Website";
                tableHeaderLevelColumn.textContent = "Membership";
                tableHeaderHoursColumn.textContent = "Hours";
                tableHeaderDescriptionColumn.textContent = "Description";
                tableHeaderRow.appendChild(tableHeaderNameColumn);
                tableHeaderRow.appendChild(tableHeaderAddressColumn);
                tableHeaderRow.appendChild(tableHeaderPhoneColumn);
                tableHeaderRow.appendChild(tableHeaderWebsiteColumn);
                tableHeaderRow.appendChild(tableHeaderLevelColumn);
                tableHeaderRow.appendChild(tableHeaderHoursColumn);
                tableHeaderRow.appendChild(tableHeaderDescriptionColumn);
        }
        tableHeader.appendChild(tableHeaderRow);
        table.appendChild(tableHeader);
        members.forEach(member => {
            let tableRow = document.createElement('tr');
            let tableNameColumn = document.createElement('td');
            let tableAddressColumn = document.createElement('td');
            let tablePhoneColumn = document.createElement('td');
            let webSite = document.createElement('a');
            let tableWebsiteColumn = document.createElement('td');
            let tableLevelColumn = document.createElement('td');
            let hours = document.createElement('ul');
            let tableHoursColumn = document.createElement('td');
            let tableDescriptionColumn = document.createElement('td');
            let name = document.createElement('p');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            tableRow.setAttribute('class','directoryRow');
            tableNameColumn.setAttribute('class','directoryListName');
            tableAddressColumn.setAttribute('class','directoryListAddress');
            tablePhoneColumn.setAttribute('class','directoryListPhone');
            webSite.setAttribute('class', 'directoryListAnchor');
            tableWebsiteColumn.setAttribute('class','directoryListWebsite');
            tableLevelColumn.setAttribute('class','directoryListLevel');
            tableHoursColumn.setAttribute('class','directoryListHours');
            tableDescriptionColumn.setAttribute('class','directoryListDescription');

            switch(columns) {
                case 1:
                    name.textContent = member.name;
                    address.textContent = member.address;
                    phone.textContent = member.phone;
                    webSite.textContent = 'Website';
                    webSite.setAttribute('href', member.website);
                    webSite.setAttribute('target', '_blank');
                    tableNameColumn.appendChild(name);
                    tableNameColumn.appendChild(address);
                    tableNameColumn.appendChild(phone);
                    tableNameColumn.appendChild(webSite);
                    tableRow.appendChild(tableNameColumn);
                  break;
                case 2:
                    address.textContent = member.address;
                    phone.textContent = member.phone;
                    tableNameColumn.textContent = `${member.name}`;
                    webSite.textContent = 'Website';
                    webSite.setAttribute('href', member.website);
                    webSite.setAttribute('target', '_blank');
                    tableAddressColumn.appendChild(address);
                    tableAddressColumn.appendChild(phone);
                    tableAddressColumn.appendChild(webSite);
                    tableRow.appendChild(tableNameColumn);
                    tableRow.appendChild(tableAddressColumn);
                  break;
                case 4:
                    address.textContent = member.address;
                    phone.textContent = member.phone;
                    tableNameColumn.textContent = `${member.name}`;
                    webSite.textContent = 'Website';
                    webSite.setAttribute('href', member.website);
                    webSite.setAttribute('target', '_blank');
                    tableAddressColumn.appendChild(address);
                    tableAddressColumn.appendChild(phone);
                    tableAddressColumn.appendChild(webSite);
                    member.hours.forEach(line => {
                        let lineItem = document.createElement('li');
                        lineItem.textContent = line;
                        lineItem.setAttribute('class','nonBulletedLineItem');
                        hours.appendChild(lineItem);
                    });
                    tableHoursColumn.appendChild(hours);
                    tableDescriptionColumn.textContent = member.description;
                    tableRow.appendChild(tableNameColumn);
                    tableRow.appendChild(tableAddressColumn);
                    tableRow.appendChild(tableHoursColumn);
                    tableRow.appendChild(tableDescriptionColumn);
                    break;
                default:
                    tableNameColumn.textContent = `${member.name}`;
                    tableAddressColumn.textContent = member.address;
                    tablePhoneColumn.textContent = member.phone;
                    webSite.textContent = member.website;
                    webSite.setAttribute('href', member.website);
                    webSite.setAttribute('target', '_blank');
                    tableWebsiteColumn.appendChild(webSite);
                    tableLevelColumn.textContent = member.membershipLevel;
                    member.hours.forEach(line => {
                        let lineItem = document.createElement('li');
                        lineItem.textContent = line;
                        lineItem.setAttribute('class','nonBulletedLineItem');
                        hours.appendChild(lineItem);
                    });
                    tableHoursColumn.appendChild(hours);
                    tableDescriptionColumn.textContent = member.description;
                    tableRow.appendChild(tableNameColumn);
                    tableRow.appendChild(tableAddressColumn);
                    tableRow.appendChild(tablePhoneColumn);
                    tableRow.appendChild(tableWebsiteColumn);
                    tableRow.appendChild(tableLevelColumn);
                    tableRow.appendChild(tableHoursColumn);
                    tableRow.appendChild(tableDescriptionColumn);
            }
            tableBody.appendChild(tableRow);            
        });
        table.appendChild(tableBody);
        cards.appendChild(table); 
    }

    if (response.ok) {
        const data = await response.json();
        if(gridActive) {
            displayMembersCard(data.members);
        } else {
            if(window.innerWidth > 1600) {
                // laptop
                displayMembersList(data.members, 0);
            } else if(window.innerWidth > 800) {
                // tablet
                displayMembersList(data.members, 4);
            } else if(window.innerWidth > 200) {
                // tablet
                displayMembersList(data.members, 2);
            } else {
                // cell
                displayMembersList(data.members, 1);
            }
        }
    }
}

getMemberData();
directoryBody.addEventListener('resize', () => {
    cards.innerHTML="";
    getMemberData();
});