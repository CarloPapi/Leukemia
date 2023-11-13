function handleContentColour() {
    const background = document.getElementById('background-image');
    const content = document.querySelectorAll('.content');
    document.addEventListener('scroll', function() {
        content.forEach((element) => {
            if (element.getBoundingClientRect().top < background.getBoundingClientRect().bottom) {
                element.style.color = "white";
            } else {
                element.style.color = "black";
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', handleContentColour);