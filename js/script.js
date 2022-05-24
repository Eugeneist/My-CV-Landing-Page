
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});


// Burger menu:

const iconMenu = document.querySelector('.sticky-menu__icon');
const burgerMenu = document.querySelector('.menu');

if (iconMenu){
    iconMenu.addEventListener("click", function() {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        burgerMenu.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll(`.menu__link[data-goto]`);
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
};

function onMenuLinkClick (event) {
    const menuLink = event.target;

    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.sticky-menu').offsetHeight;

        if(iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            burgerMenu.classList.remove('_active');
        }

        window.scrollTo({
            top:gotoBlockValue,
            behavior: "smooth"
        });
    
        event.preventDefault();
    }

};

// More works

const worksButton = document.querySelector('.works__btn');
const worksMessage = document.querySelector('.works__message');
worksButton.addEventListener("click", handleWorksClick);

function handleWorksClick(event) {
    worksMessage.classList.add('works__message_active');
    worksButton.disabled = true;
    setTimeout(hideMessage, 3000);
}

function hideMessage() {
    worksMessage.classList.remove('works__message_active');
    worksButton.disabled = false;
}