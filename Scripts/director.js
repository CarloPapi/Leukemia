function directToPages() {
    const btnElements = document.querySelectorAll('.sidebar-button');
    btnElements.forEach((element) => {
        element.addEventListener('click', function() {
            if (element.id === 'main') {
                window.open('index.html')
            } else if (element.id === 'preventions') {
                window.open('preventions.html');
            } else if (element.id === 'technologies') {
                window.open('technologies.html');
            } else if (element.id === 'treatments') {
                window.open('treatments.html');
            } else if (element.id === 'case-study') {
                window.open('case study.html')
            } else if (element.id === 'citations') {
                window.open('citations.html');
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', directToPages);