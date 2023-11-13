const baseURL = "https://trrmann.github.io/wdd230/chamber-alt/";
const JSONURL = `${baseURL}data/headNheaderNfooter.json`;
const commonHeadElement = document.querySelector("#head");
const homeHeadElement = document.querySelector(".homeHead");
const discoverHeadElement = document.querySelector(".discoverHead");
const joinHeadElement = document.querySelector(".joinHead");
const thankyouHeadElement = document.querySelector(".thankyouHead");
const directoryHeadElement = document.querySelector(".directoryHead");
const commonHeaderElement = document.querySelector("#header");
const homeHeaderElement = document.querySelector(".homeHeader");
const discoverHeaderElement = document.querySelector(".discoverHeader");
const joinHeaderElement = document.querySelector(".joinHeader");
const thankyouHeaderElement = document.querySelector(".thankyouHeader");
const directoryHeaderElement = document.querySelector(".directoryHeader");
const commonFooterElement = document.querySelector("#footer");
const homeFooterElement = document.querySelector(".homeFooter");
const discoverFooterElement = document.querySelector(".discoverFooter");
const joinFooterElement = document.querySelector(".joinFooter");
const thankyouFooterElement = document.querySelector(".thankyouFooter");
const directoryFooterElement = document.querySelector(".directoryFooter");

const addMetaElements = (headMetaData, headElement) => {
    headMetaData.forEach(metaData => {
        if('active' in metaData && metaData.active) {
            let metaItem = document.createElement('meta');
            if('name' in metaData){
                metaItem.setAttribute('name',metaData.name);
            }
            if('property' in metaData){
                metaItem.setAttribute('property',metaData.property);
            }
            if('content' in metaData){
                metaItem.setAttribute('content',metaData.content);
            }
            headElement.appendChild(metaItem);
        }
    });
}

const addIconElement = (iconData, headElement) => {
    if('active' in iconData && iconData.active) {
        let linkItem = document.createElement('link');
        linkItem.setAttribute('rel','icon');
        if('type' in iconData){
            linkItem.setAttribute('type',iconData.type);
        }
        if('href' in iconData){
            linkItem.setAttribute('href',iconData.href);
        }
        headElement.appendChild(linkItem);
    }
}

const addTitleElement = (titleData, headElement) => {
    if('active' in titleData && titleData.active) {
        let titleItem = document.createElement('title');
        if('title' in titleData){
            titleItem.textContent = titleData.title;
        }
        headElement.appendChild(titleItem);
    }
}

const addCommonHeadElements = (headData, headElement) => {
    if('links' in headData) {
        if('icon' in headData.links) {
            addIconElement(headData.links.icon, headElement);
        }
    }
    if('title' in headData) {
        addTitleElement(headData.title, headElement);
    }
    if(('meta' in headData) && (Array.isArray(headData.meta))) {
        addMetaElements(headData.meta, headElement);
    }
}

const buildHomeHead = addCommonHeadElements;
const buildDirectoryHead = addCommonHeadElements;
const buildDiscoverHead = addCommonHeadElements;
const buildJoinHead = addCommonHeadElements;
const buildThankyouHead = addCommonHeadElements;

const buildHead = async (commonHeadElement, homeHeadElement, discoverHeadElement, joinHeadElement, thankyouHeadElement, directoryHeadElement, headJSONURL) => {
    const response = await fetch(headJSONURL);
    if(response.ok) {
        const data = await response.json();
        if((commonHeadElement !== null) && ('head' in data)) {
            addCommonHeadElements(data.head, commonHeadElement);
        }
        if((homeHeadElement !== null) && ('homeHead' in data)) {
            buildHomeHead(data.homeHead, homeHeadElement);
        }
        if((discoverHeadElement !== null) && ('discoverHead' in data)) {
            buildDiscoverHead(data.discoverHead, discoverHeadElement);
        }
        if((joinHeadElement !== null) && ('joinHead' in data)) {
            buildJoinHead(data.joinHead, joinHeadElement);
        }
        if((thankyouHeadElement !== null) && ('thankyouHead' in data)) {
            buildThankyouHead(data.thankyouHead, thankyouHeadElement);
        }
        if((directoryHeadElement !== null) && ('directoryHead' in data)) {
            buildDirectoryHead(data.directoryHead, directoryHeadElement);
        }
    }
}

const addCommonHeaderElements = (headerData, headerElement) => {
    if('logo' in headerData && 'image' in headerData.logo && 'active' in headerData.logo.image && headerData.logo.image.active) {
        let pictureElement = document.createElement('picture');
        let imageElement = document.createElement('img');
        if('class' in headerData.logo.image) {
            imageElement.setAttribute('class',headerData.logo.image.class);
        }
        if('src' in headerData.logo.image) {
            imageElement.setAttribute('src',headerData.logo.image.src);
        }
        if('alt' in headerData.logo.image) {
            imageElement.setAttribute('alt',headerData.logo.image.alt);
        }
        if('width' in headerData.logo.image) {
            imageElement.setAttribute('width',headerData.logo.image.width);
        }
        if('height' in headerData.logo.image) {
            imageElement.setAttribute('height',headerData.logo.image.height);
        }
        if(('sources' in headerData.logo.image) && (Array.isArray(headerData.logo.image.sources))) {
            headerData.logo.image.sources.forEach(source => {
                if(('active' in source) && (source.active)) {
                    let sourceElement = document.createElement('source');
                    if('srcset' in source) {
                        imageElement.setAttribute('srcset', source.srcset);
                    }
                    if('media' in source) {
                        imageElement.setAttribute('media',source.media);
                    }
                    if('width' in source) {
                        imageElement.setAttribute('width',source.width);
                    }
                    if('height' in source) {
                        imageElement.setAttribute('height',source.height);
                    }
                    pictureElement.appendChild(sourceElement);
                }
            });
        }
        pictureElement.appendChild(imageElement);
        headerElement.appendChild(pictureElement);
    }
    if('subHeading' in headerData && 'active' in headerData.subHeading && headerData.subHeading.active) {
        let h2Element = document.createElement('h2');
        if('class' in headerData.subHeading) {
            h2Element.setAttribute('class',headerData.subHeading.class);
        }
        if('labelClass' in headerData.subHeading) {
            if('subHeadingText' in headerData.subHeading){
                h2Element.textContent=headerData.subHeading.subHeadingText
            }                
            let labelElement = document.createElement('label');
            labelElement.setAttribute('class',headerData.subHeading.labelClass);
            if('labelText' in headerData.subHeading){
                labelElement.textContent = headerData.subHeading.labelText;
            }
            if(('inputId' in headerData.subHeading) && ('inputType' in headerData.subHeading)){
                let inputElement = document.createElement('input');
                inputElement.setAttribute('id',headerData.subHeading.inputId);
                inputElement.setAttribute('type',headerData.subHeading.inputType);
                labelElement.appendChild(inputElement);
            }
            if('spanClass' in headerData.subHeading){
                let spanElement = document.createElement('span');
                spanElement.setAttribute('class',headerData.subHeading.spanClass);
                labelElement.appendChild(spanElement);
            }
            h2Element.appendChild(labelElement);
        }
        headerElement.appendChild(h2Element);
    }
    if(('menu' in headerData) && ('active' in headerData.menu) && (headerData.menu.active) && ('menuId' in headerData.menu)) {
        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('id',headerData.menu.menuId);
        if('menuClass' in headerData.menu){
            buttonElement.setAttribute('class',headerData.menu.menuClass);
        }
        if('menuText' in headerData.menu){
            buttonElement.textContent=headerData.menu.menuText;
        }
        headerElement.appendChild(buttonElement);
    }
    if('heading' in headerData && 'active' in headerData.heading && headerData.heading.active) {
        let h1Element = document.createElement('h1');
        if('class' in headerData.heading){
            h1Element.setAttribute('class',headerData.heading.class);
        }
        if('headingText' in headerData.heading){
            h1Element.textContent=headerData.heading.headingText;
        }
        headerElement.appendChild(h1Element);
    }
    if(('menu' in headerData) && ('active' in headerData.menu) && (headerData.menu.active) && ('nav' in headerData.menu)) {
        let navElement = document.createElement('nav');
        if('navClass' in headerData.menu.nav){
            navElement.setAttribute('class',headerData.menu.nav.navClass);
        }
        let ulElement = document.createElement('ul');
        if('ulClass' in headerData.menu.nav){
            ulElement.setAttribute('class',headerData.menu.nav.ulClass);
        }
        if(('items' in headerData.menu.nav) && (Array.isArray(headerData.menu.nav.items))){
            headerData.menu.nav.items.forEach(item => {
                if(('active' in item) && (item.active)) {
                    let liElement = document.createElement('li');
                    if('itemClass' in item){
                        liElement.setAttribute('class',item.itemClass);
                    }
                    let anchorElement = document.createElement('a');
                    if('anchorClass' in item){
                        anchorElement.setAttribute('class',item.anchorClass);
                    }
                    if('href' in item){
                        anchorElement.setAttribute('href',item.href);
                    }
                    if('anchorText' in item){
                        anchorElement.textContent=item.anchorText;
                    }
                    liElement.appendChild(anchorElement);
                    ulElement.appendChild(liElement);
                }
            });
        }
        navElement.appendChild(ulElement);
        headerElement.appendChild(navElement);
    }
}

const buildHomeHeader = addCommonHeaderElements;
const buildDirectoryHeader = addCommonHeaderElements;
const buildDiscoverHeader = addCommonHeaderElements;
const buildJoinHeader = addCommonHeaderElements;
const buildThankyouHeader = addCommonHeaderElements;

const buildHeader = async (commonHeaderElement, homeHeaderElement, discoverHeaderElement, joinHeaderElement, thankyouHeaderElement, directoryHeaderElement, headerJSONURL) => {
    const response = await fetch(headerJSONURL);
    if(response.ok) {
        const data = await response.json();
        if((commonHeaderElement !== null) && ('header' in data)) {
            addCommonHeaderElements(data.header, commonHeaderElement);
        }
        if((homeHeaderElement !== null) && ('homeHeader' in data)) {
            buildHomeHeader(data.homeHeader, homeHeaderElement);
        }
        if((discoverHeaderElement !== null) && ('discoverHeader' in data)) {
            buildDiscoverHeader(data.discoverHeader, discoverHeaderElement);
        }
        if((joinHeaderElement !== null) && ('joinHeader' in data)) {
            buildJoinHeader(data.joinHeader, joinHeaderElement);
        }
        if((thankyouHeaderElement !== null) && ('thankyouHeader' in data)) {
            buildThankyouHeader(data.thankyouHeader, thankyouHeaderElement);
        }
        if((directoryHeaderElement !== null) && ('directoryHeader' in data)) {
            buildDirectoryHeader(data.directoryHeader, directoryHeaderElement);
        }
        const modeButton = document.querySelector("#mode");
        const hamButton = document.querySelector('#menu');
        const navigation = document.querySelector('.navigation');
        const menuItems = document.querySelectorAll('.menuItem');
        
        hamButton.nodeValue = "";
        
        modeButton.addEventListener("click", () => {
            const html = document.querySelector(".html");
            if (modeButton.value == "on") {
                modeButton.value = "off";
                html.classList.toggle("dark");
            } else {
                modeButton.value = "on";
                html.classList.toggle("dark");
            }
        });
        
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
    }
}

/*
        <!--https://www.countryflags.com/flag-of-united-states-the/-->
        <!--https://flagsweb.com/US/PNG/Flag_of_South_Carolina.png-->
        <p>&copy;<span id="year"></span><br>
        Tracy R. Mann<br>
        WDD230 - Web Frontend Development I<br>
        Section B1<br>
        South Carolina 
        <picture>
            <source srcset="images/united-states-of-america-flag_150_80.webp" media="(max-width:  150px)" width="150" height="80">
            <source srcset="images/united-states-of-america-flag_300_159.webp" media="(max-width:  300px)" width="300" height="159">
            <source srcset="images/united-states-of-america-flag_600_317.webp" media="(max-width:  600px)" width="600" height="317">
            <img class="flag usFlag" src="images/united-states-of-america-flag_1000_527.webp" alt="United States Flag" loading="lazy" width="1000" height="527">
        </picture>
        <picture>
            <source srcset="images/Flag_of_South_Carolina_150_100.webp" media="(max-width:  150px)" width="150" height="100">
            <source srcset="images/Flag_of_South_Carolina_300_200.webp" media="(max-width:  300px)" width="300" height="200">
            <source srcset="images/Flag_of_South_Carolina_600_400.webp" media="(max-width:  600px)" width="600" height="400">
            <img class="flag scFlag" src="images/Flag_of_South_Carolina_1000_666.webp" alt="South Carolina Flag" loading="lazy" width="1000" height="666">
        </picture>
        </p>
        <a href="#">contact</a>
        <p id="lastmodified">Last Modification:  <span id="modification"></span></p>
*/
const addCommonFooterElements = (footerData, footerElement) => {
    /*
    if('logo' in headerData && 'image' in headerData.logo && 'active' in headerData.logo.image && headerData.logo.image.active) {
        let pictureElement = document.createElement('picture');
        let imageElement = document.createElement('img');
        if('class' in headerData.logo.image) {
            imageElement.setAttribute('class',headerData.logo.image.class);
        }
        if('src' in headerData.logo.image) {
            imageElement.setAttribute('src',headerData.logo.image.src);
        }
        if('alt' in headerData.logo.image) {
            imageElement.setAttribute('alt',headerData.logo.image.alt);
        }
        if('width' in headerData.logo.image) {
            imageElement.setAttribute('width',headerData.logo.image.width);
        }
        if('height' in headerData.logo.image) {
            imageElement.setAttribute('height',headerData.logo.image.height);
        }
        if(('sources' in headerData.logo.image) && (Array.isArray(headerData.logo.image.sources))) {
            headerData.logo.image.sources.forEach(source => {
                if(('active' in source) && (source.active)) {
                    let sourceElement = document.createElement('source');
                    if('srcset' in source) {
                        imageElement.setAttribute('srcset', source.srcset);
                    }
                    if('media' in source) {
                        imageElement.setAttribute('media',source.media);
                    }
                    if('width' in source) {
                        imageElement.setAttribute('width',source.width);
                    }
                    if('height' in source) {
                        imageElement.setAttribute('height',source.height);
                    }
                    pictureElement.appendChild(sourceElement);
                }
            });
        }
        pictureElement.appendChild(imageElement);
        headerElement.appendChild(pictureElement);
    }
    if('subHeading' in headerData && 'active' in headerData.subHeading && headerData.subHeading.active) {
        let h2Element = document.createElement('h2');
        if('class' in headerData.subHeading) {
            h2Element.setAttribute('class',headerData.subHeading.class);
        }
        if('labelClass' in headerData.subHeading) {
            if('subHeadingText' in headerData.subHeading){
                h2Element.textContent=headerData.subHeading.subHeadingText
            }                
            let labelElement = document.createElement('label');
            labelElement.setAttribute('class',headerData.subHeading.labelClass);
            if('labelText' in headerData.subHeading){
                labelElement.textContent = headerData.subHeading.labelText;
            }
            if(('inputId' in headerData.subHeading) && ('inputType' in headerData.subHeading)){
                let inputElement = document.createElement('input');
                inputElement.setAttribute('id',headerData.subHeading.inputId);
                inputElement.setAttribute('type',headerData.subHeading.inputType);
                labelElement.appendChild(inputElement);
            }
            if('spanClass' in headerData.subHeading){
                let spanElement = document.createElement('span');
                spanElement.setAttribute('class',headerData.subHeading.spanClass);
                labelElement.appendChild(spanElement);
            }
            h2Element.appendChild(labelElement);
        }
        headerElement.appendChild(h2Element);
    }
    if(('menu' in headerData) && ('active' in headerData.menu) && (headerData.menu.active) && ('menuId' in headerData.menu)) {
        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('id',headerData.menu.menuId);
        if('menuClass' in headerData.menu){
            buttonElement.setAttribute('class',headerData.menu.menuClass);
        }
        if('menuText' in headerData.menu){
            buttonElement.textContent=headerData.menu.menuText;
        }
        headerElement.appendChild(buttonElement);
    }
    if('heading' in headerData && 'active' in headerData.heading && headerData.heading.active) {
        let h1Element = document.createElement('h1');
        if('class' in headerData.heading){
            h1Element.setAttribute('class',headerData.heading.class);
        }
        if('headingText' in headerData.heading){
            h1Element.textContent=headerData.heading.headingText;
        }
        headerElement.appendChild(h1Element);
    }
    if(('menu' in headerData) && ('active' in headerData.menu) && (headerData.menu.active) && ('nav' in headerData.menu)) {
        let navElement = document.createElement('nav');
        if('navClass' in headerData.menu.nav){
            navElement.setAttribute('class',headerData.menu.nav.navClass);
        }
        let ulElement = document.createElement('ul');
        if('ulClass' in headerData.menu.nav){
            ulElement.setAttribute('class',headerData.menu.nav.ulClass);
        }
        if(('items' in headerData.menu.nav) && (Array.isArray(headerData.menu.nav.items))){
            headerData.menu.nav.items.forEach(item => {
                if(('active' in item) && (item.active)) {
                    let liElement = document.createElement('li');
                    if('itemClass' in item){
                        liElement.setAttribute('class',item.itemClass);
                    }
                    let anchorElement = document.createElement('a');
                    if('anchorClass' in item){
                        anchorElement.setAttribute('class',item.anchorClass);
                    }
                    if('href' in item){
                        anchorElement.setAttribute('href',item.href);
                    }
                    if('anchorText' in item){
                        anchorElement.textContent=item.anchorText;
                    }
                    liElement.appendChild(anchorElement);
                    ulElement.appendChild(liElement);
                }
            });
        }
        navElement.appendChild(ulElement);
        headerElement.appendChild(navElement);
    }
    */
    document.querySelector('#year').textContent = currentDate.getFullYear();
    document.querySelector('#modification').textContent = document.lastModified;
    
}

const buildHomeFooter = addCommonFooterElements;
const buildDirectoryFooter = addCommonFooterElements;
const buildDiscoverFooter = addCommonFooterElements;
const buildJoinFooter = addCommonFooterElements;
const buildThankyouFooter = addCommonFooterElements;

const buildFooter = async (commonFooterElement, homeFooterElement, discoverFooterElement, joinFooterElement, thankyouFooterElement, directoryFooterElement, footerJSONURL) => {
    const response = await fetch(footerJSONURL);
    if(response.ok) {
        const data = await response.json();
        if((commonFooterElement !== null) && ('footer' in data)) {
            addCommonFooterElements(data.footer, commonFooterElement);
        }
        if((homeFooterElement !== null) && ('homeFooter' in data)) {
            buildHomeFooter(data.homeFooter, homeFooterElement);
        }
        if((discoverFooterElement !== null) && ('discoverFooter' in data)) {
            buildDiscoverFooter(data.discoverFooter, discoverFooterElement);
        }
        if((joinFooterElement !== null) && ('joinFooter' in data)) {
            buildJoinFooter(data.joinFooter, joinFooterElement);
        }
        if((thankyouFooterElement !== null) && ('thankyouFooter' in data)) {
            buildThankyouFooter(data.thankyouFooter, thankyouFooterElement);
        }
        if((directoryFooterElement !== null) && ('directoryFooter' in data)) {
            buildDirectoryFooter(data.directoryFooter, directoryFooterElement);
        }
    }
}

buildHead(commonHeadElement, homeHeadElement, discoverHeadElement, joinHeadElement, thankyouHeadElement, directoryHeadElement, JSONURL);
buildHeader(commonHeaderElement, homeHeaderElement, discoverHeaderElement, joinHeaderElement, thankyouHeaderElement, directoryHeaderElement, JSONURL);
buildFooter(commonFooterElement, homeFooterElement, discoverFooterElement, joinFooterElement, thankyouFooterElement, directoryFooterElement, JSONURL);
