const scroll = function () {
    const scrollChangeColor = () => {
        const nav = document.querySelector('.header');
        if (window.scrollY > 50) {
            nav.classList.add("scrolling");
        } else {
            nav.classList.remove("scrolling");
        }
    }


    const changeActiveNav = () => {
        let navigationLinks = document.querySelectorAll('.header__nav li a');
        let fromTop = window.scrollY;

        navigationLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active-nav');
            } else {
                link.classList.remove('active-nav');
            }
        });
    };

    window.addEventListener("scroll", changeActiveNav);
    window.addEventListener("scroll", scrollChangeColor);
}

export default scroll;