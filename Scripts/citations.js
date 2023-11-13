function changeContentColours() {
    const background = document.getElementById('background-image');
    const header = document.getElementById('heading');
    const cites = document.querySelectorAll('.citations');
    document.addEventListener('scroll', function() {
        cites.forEach((cite) => {
            if (cite.getBoundingClientRect().top < background.getBoundingClientRect().bottom) {
                cite.style.color = "white";
            } else {
                cite.style.color = "black";
            }
        })
        if (header.getBoundingClientRect().top < background.getBoundingClientRect().bottom) {
            header.style.color = "white";
        } else {
            header.style.color = "black";
        }
    })
}

document.addEventListener('DOMContentLoaded', changeContentColours)