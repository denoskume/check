// Function to load content dynamically
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Load home.html content on page load
window.onload = function() {
    loadContent('home.html');
};

// Add event listener to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.getAttribute('href').substring(1) + '.html';
        loadContent(url);
    });
});

        function toggleDescription(id) {
            const description = document.getElementById(id);
            const seeMore = description.previousElementSibling.querySelector('.see-more');

            if (description.style.display === "none") {
                description.style.display = "block";
                seeMore.innerHTML = "...see less";
            } else {
                description.style.display = "none";
                seeMore.innerHTML = "...see more";
            }
        }


// Print Resume
document.getElementById('content').addEventListener('click', function(event) {
    if (event.target.id === 'print-btn') {
        window.print();
    }
});

// Start mobile Script 

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded');

    const profilePhoto = document.getElementById('profilePhoto');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const topIcons = document.querySelector('.top-icons');
    const bottomNav = document.querySelector('.bottom-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            topIcons.classList.add('hide');
            bottomNav.classList.add('hide');
        } else {
            // Scroll up
            topIcons.classList.remove('hide');
            bottomNav.classList.remove('hide');
        }
        lastScrollTop = scrollTop;
    });
});

//End Mobile Script 
