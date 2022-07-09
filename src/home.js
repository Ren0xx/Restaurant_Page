export default function home(content){
    content.replaceChildren();
    
    const header = document.createElement('h1');
    header.classList.add('headline');
    header.textContent = 'My restaurant page';

    const paragraph = document.createElement('p');
    fetch("../src/data.txt")
        .then((response) => {
            return response.text();
        })
        .then(text => {
            paragraph.textContent = text;
        })
    // paragraph.textContent = 'Its my page';
 
    const description = document.createElement('div');
    description.classList.add('description');
    description.appendChild(paragraph);

    
    content.appendChild(header);
    content.appendChild(description);
}