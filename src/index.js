import './index.scss'
import 'normalize.css'

import ItemsList from "./components/items-list";
import Item from "./components/item";
import Cart from "./components/cart";

const mocks = [
    {
        "id": 1,
        "name": "notebook1",
        "price": 1000
    },
    {
        "id": 2,
        "name": "notebook2",
        "price": 1100
    },
    {
        "id": 3,
        "name": "notebook3",
        "price": 1200
    },
    {
        "id": 4,
        "name": "notebook4",
        "price": 1300
    },
    {
        "id": 5,
        "name": "notebook5",
        "price": 1400
    }
]

let cart = []

const itemsList = ItemsList();
const {CartElement, updateCart} = Cart(cart);

document.body.appendChild(itemsList);
document.body.appendChild(CartElement)

const generateItems = () => {
    mocks.forEach((item) => {

        const onAdd = () => {
            cart.push(item);
            updateCart(cart)
        }

        const itemElement = Item(item.name, item.price, onAdd);
        itemsList.appendChild(itemElement);
    })
}

generateItems()
