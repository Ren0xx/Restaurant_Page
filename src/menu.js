export default function menu(content){

    content.replaceChildren();

    const header = document.createElement('h1');
    header.textContent = 'Menu';

    const subheader1 = document.createElement('h3');
    subheader1.textContent = 'Beverages';


    //beverages
    const beverages = document.createElement('div');
    const bevList = document.createElement('ul');

    for (let i = 0; i < 6; i++) {
        const li = document.createElement('li');
        li.textContent = `Dish number ${i + 1}`;
        bevList.appendChild(li);
    }
    
    beverages.appendChild(subheader1);
    beverages.appendChild(bevList);
    
    //main dishes
    const subheader2 = document.createElement('h3');
    subheader2.textContent = 'Main dishes';

    const mainDishes = document.createElement('div');
    const mainList = document.createElement('ul');
    
    for (let i = 0; i < 6; i++) {
        const li = document.createElement('li');
        li.textContent = `Main dish number ${i + 1}`;
        mainList.appendChild(li);
    }
    
    mainDishes.appendChild(subheader2);
    mainDishes.appendChild(mainList);
    
    const subheader3 = document.createElement('h3');
    subheader3.textContent = 'Desserts';
    
    const desserts = document.createElement('div');
    const dessertsList = document.createElement('ul');

    for (let i = 0; i < 6; i++) {
        const li = document.createElement('li');
        li.textContent = `Dessert number ${i + 1}`;
        dessertsList.appendChild(li);
    }
    desserts.appendChild(subheader3);
    desserts.appendChild(dessertsList);


    content.appendChild(header);


    content.appendChild(beverages);
    content.appendChild(mainDishes);

    content.appendChild(desserts);
}