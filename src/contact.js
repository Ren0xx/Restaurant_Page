export default function contact(content){

    content.replaceChildren();

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = 'Contact Us';

    //owner
    const ownerContainer = document.createElement('div');
    const managerContainer = document.createElement('div');
    const mainChef = document.createElement('div');

    ownerContainer.innerHTML=
    `
        <div>
            <h3>John Bean</h3>
            <p>
                Owner <br>
                555-555-5554<br>
                myemail@mail.com
            </p>
        </div>
    `
    managerContainer.innerHTML=
    `
        <div>
            <h3>Neil Armstrong</h3>
            <p>
                Manager <br>
                555-532-5554<br>
                myornotemail@mail.com
            </p>
        </div>
    `
    mainChef.innerHTML=
    `
        <div>
            <h3>Arnold Dobronsky</h3>
            <p>
                Main Chef<br>
                345-555-5554<br>
                contactme@mail.com
            </p>
        </div>
    `

    content.append(mainHeader, ownerContainer, managerContainer, mainChef);
    //manager
    //main chef

    return content;

}