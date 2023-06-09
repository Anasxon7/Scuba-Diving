window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector(".loader")
    const menuBtn = document.querySelector('.menu')
    const navigation = document.querySelector('.nav__list')
    const navigationItems = document.querySelectorAll('.nav__item')
        
    setTimeout(() => {
        loader.style.opacity = "0"
        setTimeout(() => {
            loader.style.display = "none"
        },1500)
    },3000)



    menuBtn.addEventListener('click', () => {
        navigation.classList.toggle('active')
        menuBtn.classList.toggle('openmenu')

    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            navigation.classList.remove('active') 
            menuBtn.classList.remove('openmenu')
        })
    })

    function scrollHeader() {
        const header = document.getElementById('header')
        if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    let swipertestimonial = new Swiper(".testimonial__container", {
        loop: true,
        spaceBetween:24,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        }, 
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                spaceBetween:48,
            }
        }
    });

    let mixershop = mixitup('.shop__content', {
        selectors: {
            target: '.shop__card'
        },
        animation: {
            duration: 300
        }
    });

    const linkshop = document.querySelectorAll('.shop__item')
    function activeshop() {
        linkshop.forEach(i=> i.classList.remove('active-shop'))
        this.classList.add('active-shop')
    }
    linkshop.forEach(i=> i.addEventListener('click', activeshop ))
    
    function scrollUp () {
        const  scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
    

    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link')
            }else {
                document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal( {
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__title, .testimonial__container, .features__img, .shop__filters`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`.home__scuba-data`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.home__button, .form_btn`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.about__group, .input_left, .offter__data`, { origin: 'left'})
sr.reveal(`.about__data, .input_right, .offter__img`, { origin: 'right'})
sr.reveal(`.features__map`, {delay: 600, origin: 'bottom'})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.shop__card, .logos__content , .footer__content`, {interval: 100})

});
