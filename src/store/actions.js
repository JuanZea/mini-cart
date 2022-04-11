import { findIndex } from 'lodash';

export const getCartProducts = () => {
    const raw = localStorage.getItem('cartProducts');
    return raw ? JSON.parse(raw) : [];
};

export const actions = {
    addProductToCart: (product) => {
        const cartProducts = getCartProducts();
        const id = findIndex(cartProducts, ['id', product.id]);

        if (id === -1) cartProducts.push({ ...product, quantity: 1 });
        else cartProducts[id].quantity++;

        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        console.log('products:', cartProducts);
    },
};
