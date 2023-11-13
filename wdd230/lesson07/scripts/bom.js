const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

let chaptersArray = getChapterList() || [];

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    const nodeArray = Array.prototype.slice.call(list.childNodes, 0);
    nodeArray.sort((a,b)=>{
        if(a.textContent > b.textContent) return 1;
        if(a.textContent < b.textContent) return -1;
        return 0;
    });
    nodeArray.forEach((node)=>{
        list.appendChild(node);
    });    
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function alreadyPresent(string) {
    var present = false;
    if(list.hasChildNodes){
        list.childNodes.forEach(
            (node) => {
                if(node.textContent == string + '❌') {
                    present = true;
                }
            });
    }
    return present;
}

button.addEventListener('click', () => {
    if (input.value == '' || input.value == '---') {
        input.focus();
    } else if(alreadyPresent(input.value)) {
        input.value = '';
        input.focus();
    } else {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    };
});