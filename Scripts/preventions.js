function handleColourChange() {
    const heading = document.getElementById('heading');
    const preventionQuestion = document.getElementById('prevention-question');
    const preventionAnswer = document.getElementById('prevention-answer');
    const startPosition = window.scrollY;
    document.addEventListener('scroll', function() {
        const newPos = window.scrollY;
        if (newPos > startPosition) {
            heading.style.color = "white";
        } else {
            heading.style.color = "black";
        }
        if (window.innerHeight <= 768) {
            if (newPos > startPosition) {
                preventionQuestion.style.color = "white";
                preventionAnswer.style.color = "white";
            } else {
                preventionQuestion.style.color = "black";
                preventionAnswer.style.color = "black";
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', handleColourChange)