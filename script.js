/* =========================================================
   NOVA CAFÉ — MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".premium-menu-card, " +
    ".about-content, " +
    ".about-image, " +
    ".gallery-item, " +
    ".testimonial-card, " +
    ".contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   RESERVATION FORM
========================================================= */

const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");


if (reservationForm && formMessage) {

    reservationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            formMessage.textContent =
                `Thanks, ${name}! Your reservation request has been received.`;

            reservationForm.reset();

        }
    );

}


/* =========================================================
   PREMIUM MENU — CATEGORY FILTER
========================================================= */

const menuTabs =
    document.querySelectorAll(".menu-tab");

const menuCards =
    document.querySelectorAll(".premium-menu-card");


menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        /* Remove active state */
        menuTabs.forEach(item => {
            item.classList.remove("active");
        });


        /* Activate clicked tab */
        tab.classList.add("active");


        /* Get category */
        const category =
            tab.dataset.category;


        /* Show matching cards */
        menuCards.forEach(card => {

            if (card.dataset.category === category) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================================
   VIEW FULL MENU
========================================================= */

const fullMenuBtn =
    document.getElementById("fullMenuBtn");


if (fullMenuBtn) {

    fullMenuBtn.addEventListener("click", () => {

        /* Remove active state */
        menuTabs.forEach(tab => {
            tab.classList.remove("active");
        });


        /* Show all menu cards */
        menuCards.forEach(card => {
            card.style.display = "block";
        });


        /* Scroll to menu */
        const menuSection =
            document.getElementById("menu");

        if (menuSection) {

            menuSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}