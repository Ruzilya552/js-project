import './cart.scss'

const Cart = (cart) => {
    const CartElement = document.createElement('div');
    const itemsCountElement = document.createElement('span');
    const priceElement = document.createElement('span');

    itemsCountElement.innerText = `Кол-во: ${cart.length}`;
    priceElement.innerText = `Итоговая сумма: 0`;

    CartElement.className = "cart";
    itemsCountElement.className = "cart__count";
    priceElement.className = "cart__price";

    CartElement.appendChild(itemsCountElement)
    CartElement.appendChild(priceElement)

    const updateCart = (newCart) => {
        itemsCountElement.innerText = `Кол-во: ${newCart.length}`;
        const sumPrice = newCart.reduce((sum, item) => sum + item.price, 0);

        priceElement.innerText = `Итоговая сумма: ${sumPrice}`;
    }

    return {CartElement, updateCart};
}

export default Cart