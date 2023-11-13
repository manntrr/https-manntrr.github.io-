const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

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
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
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
        input.focus();
        input.value = '';
    };
});