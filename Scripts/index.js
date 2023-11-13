function changeContentColour() {
    const startPosition = window.scrollY;
    const upperElements = document.querySelectorAll('.upper-content');
    const additionalElements = [
        document.getElementById('effects-heading'),
        document.getElementById('organ-header'),
        document.getElementById('effects-header')
    ];
    document.addEventListener('scroll', function() {
        upperElements.forEach((element) => {
            let newPos = window.scrollY;
            if (newPos > startPosition) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        })
        additionalElements.forEach((element) => {
            let newPos = window.s
            if (newPos > startPosition) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        })
    })
}

function changeTableColour() {
    const rows = document.querySelectorAll('.row');
    const background = document.getElementById('background-image');
    document.addEventListener('scroll', function() {
        rows.forEach((row) => {
            if (row.getBoundingClientRect().top < background.getBoundingClientRect().bottom) {
                row.style.color = "white"
            } else {
                row.style.color = "black";
            }
        })
    })
}

function main() {
    changeContentColour();
    changeTableColour();
}

document.addEventListener('DOMContentLoaded', main)

