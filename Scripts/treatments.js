function changeContentColours() {
    const background = document.getElementById('background-image');
    const headerElements = document.querySelectorAll('.treatment-header');
    const contentElements = document.querySelectorAll('.treatment-content');
    const headings = [
        document.getElementById('heading'),
        document.getElementById('subheading')
    ];
    document.addEventListener('scroll', function() {
        headerElements.forEach((element) => {
            if (element.getBoundingClientRect().top < background.getBoundingClientRect().bottom) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        })
        contentElements.forEach((element) => {
            if (element.getBoundingClientRect().top < background.getBoundingClientRect().bottom) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        })
        headings.forEach((element) => {
            if (element.getBoundingClientRect().top < background.getBoundingClientRect().bottom) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', changeContentColours)