import Food from './images/food.jpg';

export default function home(content){
    content.replaceChildren();
    
    const header = document.createElement('h1');
    header.classList.add('headline');
    header.textContent = 'My restaurant page';

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Ricuperata vi improvviso animatrici ah. Atto se avro di nilo. Impaziente obbedivamo tu la trattenuto ritroverai finalmente ed il ricuperato. Nascondeva finalmente trapassato indicibili ti mi or le. No al palpitante sostenendo appartiene sbigottito ho no. Ai ricuperato sfaldavano rientrarvi da te silenziosa restituire. Nel gambe omeri lauri qui mai mille rombo. Ribollisse trascinava sue indicibile all dormissero lineamento visitatore. Elefantina aspettando impazienza voluttuosa conservava ai ha so immobilita. Supplizio benedetto se desiderio abbassano ho benedetta assistere Obliare corrosi confini pollici ve al deposti monella.'
       
    const description = document.createElement('div');
    description.appendChild(paragraph1);

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Escito vedono seduce lo tavola veduta ch monaco. Inebriato dov riconosce eri chiamando consiglio ora. Salire voi medico gli soffio statue udi. Restituire conservava mi ai lineamento perfezione ci scomparire oh raccontava. Prime col magro siamo polsi osi. Sue via sonno dov nel versi alcun siate possa salde. ';

    description.appendChild(paragraph2);

    const image = document.createElement('img');
    image.src = Food;

    
    content.appendChild(header);
    content.appendChild(description);
    content.appendChild(image);
}