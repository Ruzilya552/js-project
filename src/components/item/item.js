import './item.scss';
import ItemImg from '../../assets/images/macbook.jpg'

const Item = (name, price, onAdd) => {
    const ItemElement = document.createElement('div');
    ItemElement.className = "item";

    const nameElement = document.createElement('span');
    nameElement.className = "item__name";
    nameElement.innerText = name;

    const priceElement = document.createElement('span');
    priceElement.className = "item__price";
    priceElement.innerText = `Цена: ${price} руб.`;

    const buttonElement = document.createElement('button');
    buttonElement.className = "item__button";
    buttonElement.innerText = "Добавить",
    buttonElement.addEventListener('click', onAdd)

    const imageElement = document.createElement('img');
    imageElement.src = ItemImg;
    imageElement.className = "item__image";

    ItemElement.appendChild(nameElement);
    ItemElement.appendChild(imageElement);
    ItemElement.appendChild(priceElement);
    ItemElement.appendChild(buttonElement);

    return ItemElement;
}

export default Item