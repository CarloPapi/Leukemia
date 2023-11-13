function changeContentColour() {
    const headerElement = document.getElementById('heading');
    const imgElement = document.getElementById('background-image');
    const imgBottom = imgElement.getBoundingClientRect().bottom;
    const headingElements = document.querySelectorAll('.tech-heading');
    const contentElements = document.querySelectorAll('.tech-content');
    document.addEventListener('scroll', function() {
        headingElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < imgBottom) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        });
        contentElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < imgBottom) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        })
        if (headerElement.getBoundingClientRect().top < imgBottom) {
            headerElement.style.color = "white";
        } else {
            headerElement.style.color = "black";
        }
    });
}

document.addEventListener('DOMContentLoaded', changeContentColour);
