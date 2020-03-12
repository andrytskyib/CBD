const modal = () => {
    const login = document.querySelector(".header__login");

    const openModalLogin = () => {
        const modalLogin = document.getElementById('id01');
        const close = document.querySelector(".close1");

        window.addEventListener("click", function (event) {
            if (event.target == modalLogin) {
                modalLogin.style.display = "none";
            }
        });

        login.addEventListener("click", function (e) {
            if (e.target.className == "login-modal" || e.target.className == "fas fa-sign-in-alt") {
                modalLogin.style.display = 'block'
            }
        });

        close.addEventListener("click", function () {
            modalLogin.style.display = 'none'
        });
    }

    openModalLogin()


    const openModalSearch = () => {
        const modalSearch = document.getElementById('id02');

        window.addEventListener("click", function (event) {
            if (event.target == modalSearch) {
                modalSearch.style.display = "none";
            }
        });

        login.addEventListener("click", function (e) {
            if (e.target.className == "search-modal" || e.target.className == "fas fa-search") {
                modalSearch.style.display = 'block'
            }
        });
    }

    openModalSearch()

    const openModalContacts = () => {
        const modalContactUs = document.getElementById('id00');
        const close = document.querySelector(".close");

        window.addEventListener("click", function (event) {
            if (event.target == modalContactUs) {
                modalContactUs.style.display = "none";
            }
        });

        const nav = document.querySelector(".header__nav");

        nav.addEventListener("click", function (e) {
            if (e.target.className == "scrollto contact-us") {
                modalContactUs.style.display = 'block'
            }
        });

        close.addEventListener("click", function () {
            modalContactUs.style.display = 'none'
        });
    }

    openModalContacts()

    const openModalCart = () => {
        const modalCart = document.getElementById('id03');
        const close = document.querySelector(".close");

        window.addEventListener("click", function (event) {
            if (event.target == modalCart) {
                modalCart.style.display = "none";
            }
        });

        login.addEventListener("click", function (e) {
            if (e.target.className == "card" || e.target.className == "fas fa-shopping-cart") {
                modalCart.style.display = 'block'
            }
        });

        close.addEventListener("click", function () {
            modalCart.style.display = 'none'
        });
    }

    openModalCart()

}

export default modal;