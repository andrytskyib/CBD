const cart = function () {
    const carts = document.querySelectorAll('.slider__bottom .button');
    const cartNum = document.querySelector('.card-number');
    let products = [
        {
            name: 'CBD ORANGE FLAVOR TINCTURE',
            tag: 'cart2',
            price: 50,
            inCart: 0
        },
        {
            name: 'BLACK ICE CBD MUSCLE',
            tag: 'cart1',
            price: 50,
            inCart: 0
        },
        {
            name: 'CBD + CURCUMIN COFFEE',
            tag: 'cart3',
            price: 80,
            inCart: 0
        },
        {
            name: 'CBD + COFFEE FLAVOR',
            tag: 'cart4',
            price: 60,
            inCart: 0
        },
        {
            name: 'CBD OIL FULL SPECTRUM',
            tag: 'cart5',
            price: 70,
            inCart: 0
        }
    ]

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
            displayCart();
        });
    }

    const onLoadCartNubers = () => {
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            cartNum.textContent = productNumbers;
        }
    }

    const cartNumbers = (product) => {
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            cartNum.textContent = productNumbers + 1;
        } else {
            localStorage.setItem('cartNumbers', 1);
            cartNum.textContent = 1;
        }

        setItems(product);
    }

    const setItems = (product) => {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        if (cartItems != null) {
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }
            cartItems[product.tag].inCart += 1;
        } else {
            product.inCart = 1;
            cartItems = {
                [product.tag]: product
            }
        }


        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

    const totalCost = (product) => {
        let cartCost = localStorage.getItem('totalCost');

        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        } else {
            localStorage.setItem("totalCost", product.price);
        }
    }

    const displayCart = () => {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        let cartCost = localStorage.getItem('totalCost');

        if (cartItems) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="product">
                    <img src="../src/img/${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>
                <div class="price">$${item.price}</div>
                <div class="quantity">
                    <span>${item.inCart}</span>
                </div>
                <div class="total">
                    $${item.inCart * item.price}
                </div>
                `;
            });

            productContainer.innerHTML += `
                <div class="busketTotalContainer">
                    <h4 class ="basketTotalTitle">
                        Basket Total
                    </h4>
                    <h4 class="basketTotal">
                        $${cartCost}
                    </h4>
                </div>
            `;
        } else {
            productContainer.innerHTML = '<div class="cart-empty">Cart is empty</div>';
        }
        const removeCart = document.querySelector(".remove-cart");
        removeCart.addEventListener("click", function () {
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('totalCost');
            localStorage.removeItem('cartNumbers');
            productContainer.innerHTML = '<div class="cart-empty">Cart is empty</div>';
            cartNum.textContent = 0;
        });
    }

    onLoadCartNubers();
    displayCart();

}


export default cart;