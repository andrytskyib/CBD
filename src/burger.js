const burger = function () {
    const menuShow = document.getElementById("menu");
    const trigger = document.getElementById("trigger");

    trigger.addEventListener("click", open);

    function open() {
        menuShow.classList.toggle("show");
        trigger.classList.toggle("change");
    }
}

export default burger;