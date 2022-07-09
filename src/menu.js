export default function menu(content){

    content.replaceChildren();

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = 'Menu';

    


    //beverages
    const subheader1 = document.createElement('h3');
    const beverages = document.createElement('div');
    const bevList = document.createElement('ul');
    
    subheader1.textContent = 'Beverages';

    for (let i = 0; i < 6; i++) {
        const li = document.createElement('li');
        li.textContent = `Dish number ${i + 1}`;
        bevList.appendChild(li);
    }
    
    beverages.appendChild(subheader1);
    beverages.appendChild(bevList);
    
    //main dishes
    const subheader2 = document.createElement('h3');
    const mainDishes = document.createElement('div');
    const mainList = document.createElement('ul');
    
    subheader2.textContent = 'Main dishes';

    for (let i = 0; i < 6; i++) {
        const li = document.createElement('li');
        li.textContent = `Main dish number ${i + 1}`;
        mainList.appendChild(li);
    }
    
    mainDishes.appendChild(subheader2);
    mainDishes.appendChild(mainList);
    
    const subheader3 = document.createElement('h3');
    const desserts = document.createElement('div');
    const dessertsList = document.createElement('ul');
    
    subheader3.textContent = 'Desserts';
    

    for (let i = 0; i < 6; i++) {
        const li = document.createElement('li');
        li.textContent = `Dessert number ${i + 1}`;
        dessertsList.appendChild(li);
    }
    desserts.appendChild(subheader3);
    desserts.appendChild(dessertsList);


    content.append(mainHeader, beverages, mainDishes, desserts);

    return content;
}