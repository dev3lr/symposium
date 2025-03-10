

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", (event) => {
        navLinks.classList.toggle("show");
        event.stopPropagation(); // Prevent click from propagating to document
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});


const tabButtons = document.querySelectorAll('.tab-button');
const committeePanels = document.querySelectorAll('.committee-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetPanel = document.querySelector(button.dataset.tabTarget);
        committeePanels.forEach(panel => panel.classList.remove('active'));
        targetPanel.classList.add('active');
        tabButtons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
    });
});



const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) { // Show the button when scrolled down 500px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
});
