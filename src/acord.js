const acord = function () {
    const accordion = document.getElementById('acord');

    accordion.addEventListener("click", function (e) {
        let targer = e.target
        if (targer.tagName == "BUTTON") {
            targer.classList.toggle("active");
            targer.nextElementSibling.classList.toggle("show-panel");
        }
    });
}

export default acord;