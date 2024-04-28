document.querySelectorAll('nav a').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            const offsetTop =targetElement.getBoundingClientRect().top;

            const scrollDistance = window.pageYOffset + offsetTop - 50;
            window.scrollTo({
                top: scrollDistance,
                behavior: 'smooth'
            });
        }
     });
});
