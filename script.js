// home page animation
function animatehomepage() {
    let hometl = gsap.timeline()
    hometl.from(".logo", {
        y: -100,
        duration: 0.5,
        opacity: 0,
        delay: 1, 
    })
    hometl.from('.nav-partition', {
        opacity:0
    })
    hometl.from(".links li, #nav-bag", {
        y: -40,
        stagger: 0.1,
        opacity: 0,
        duration: 0.4,
    })
    hometl.from('.left-home h1 span', {
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        opacity: 0,
        delay: -0.9,
    })
    hometl.from('.btn', {
        x: -50,
        duration: 0.4,
        opacity: 0,
    })
    hometl.from('.right-home', {
        x: 200,
        duration: 0.6,
        opacity: 0,
        delay: -0.2,
    })
    hometl.from('.home-beans', {
        x: -100,
        duration: 0.6,
        opacity: 0,
        delay: -0.4,
    })
}
// Navbar Dropdown
function dropdown() {
    let droptl = gsap.timeline()

    droptl.to(".dropdown", {
        top: "12vh",
        duration: 0.6,
    })
    droptl.to("#dropdown-btn", {
        rotate: "-90deg",
        duration: 0.4,
        delay: -0.6
    })
    droptl.from(".menu-content li", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
    })

    droptl.pause()

    const naviagtedropdown = document.querySelectorAll("#dropdown-navigation, .dropdown")
    naviagtedropdown.forEach(link => {
        link.addEventListener("mouseenter", () => {
            droptl.play()
        })
    })

    naviagtedropdown.forEach(link => {
        link.addEventListener("mouseleave", () => {
            droptl.reverse()
        })
    })

};
dropdown();

// navbar responsive
function navresponsive() {
    const hamburger = document.querySelector('#nav-open')
    const navclose = document.querySelector('#nav-close')
    const navcontent = document.querySelector('.links')

    hamburger.addEventListener('click', () => {
        navcontent.classList.add('active');
        if (navcontent.classList.contains('active')) {
            const navtl = gsap.timeline()

            navtl.from('.active', {
                right: '-100vw',
                duration: 0.8,
            })
            navtl.from('.active li', {
                x: 50,
                opacity: 0,
                stagger: 0.09,
                duration: 0.6,
                delay: -0.3,
            })
            navtl.from('#nav-close', {
                opacity: 0,
                delay: -0.3
            })
        }
        else {
            console.log('there is no active class')
        }
    })
    navclose.addEventListener('click', () => {
        navcontent.classList.remove('active')
        if (navcontent.classList.contain('active')) {

            console.log('there is active class')
        }
        else {
        //    fsg
        }
    })
};
navresponsive();

// cursor follower
function mousefollower() {
    const content = document.querySelectorAll('.left-home h1, .btn, .home-img, .home-beans')
    const content2 = document.querySelectorAll(".links li")
    const cursor = document.querySelector(".cursor-follower")
    const dropdown = document.querySelectorAll(".dropdown, #heading")
    const cards = document.querySelectorAll('.highlight, .product, .left-sec-3 img, .sec-7 img')


    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('mousemove', (e) => {

            gsap.to(cursor, {
                x: e.clientX - 2,
                y: e.clientY + 10,
                duration: 0.3,
                opacity: 1,
            });
            gsap.to('.cursor-follower p, .cursor-follower svg', {
                display: 'none',
                duration: 0.1
            });
        });
    });

    // content hovering
    content.forEach(contentHovering => {
        contentHovering.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: "50px",
                height: "50px",
                backgroundColor: "#FFF6DD",
                border: "1px solid #513206",
                duration: 0.2,
                mixBlendMode: 'difference',
            });
        });
    });

    content.forEach(contentHovering => {
        contentHovering.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: "15px",
                height: "15px",
                backgroundColor: "#513026",
                border: "none",
                duration: 0.2,
                mixBlendMode: 'normal',
            });
            gsap.to('.cursor-follower p, .cursor-follower svg', {
                display: 'none',
                duration: 0.1
            });
        });
    });


    // links hovering

    content2.forEach(linkHovering => {
        linkHovering.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: "40px",
                height: "40px",
                backgroundColor: "#fff6dd",
                border: "1px solid #513026",
                duration: 0.2,
                mixBlendMode: 'difference',
            });
        });
    });

    content2.forEach(linkHovering => {
        linkHovering.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: "15px",
                height: "15px",
                backgroundColor: "#513026",
                border: "none",
                duration: 0.2,
                mixBlendMode: 'normal',
            });
            gsap.to('.cursor-follower p, .cursor-follower svg', {
                display: 'none',
                duration: 0.1
            });
        });
    });


    // HIghlights and produxt cards hovering

    cards.forEach(cardHovering => {
        cardHovering.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: "50px",
                height: "50px",
                duration: 0.2,
            });
            gsap.to('.cursor-follower p, .cursor-follower svg', {
                display: 'block',
            });
        });
    });;

    cards.forEach(cardHovering => {
        cardHovering.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: "15px",
                height: "15px",
                backgroundColor: "#513026",
                border: "none",
                duration: 0.2,
                mixBlendMode: 'normal',
            });
            gsap.to('.cursor-follower p, .cursor-follower svg', {
                display: 'none',
                delay: -0.9,
            });
        });
    });



    // dropdown hovering

    dropdown.forEach(dropdownHovering => {
        dropdownHovering.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: "40px",
                height: "40px",
                backgroundColor: "#fff6dd",
                border: "1px solid #513026",
                duration: 0.2,
                mixBlendMode: 'difference',
            });
            gsap.to('.cursor-follower p, .cursor-follower svg', {
                display: 'block',
            });
        });
    });;

    dropdown.forEach(dropdownHovering => {
        dropdownHovering.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: "15px",
                height: "15px",
                backgroundColor: "#513026",
                border: "none",
                duration: 0.2,
                mixBlendMode: 'normal',
            });
            gsap.to('.cursor-follower p, .cursor-follower svg', {
                display: 'none',
                delay: -0.9,
            });
        });
    });
};
mousefollower();

// gsap scroll trigger
function scrolltrigger() {
    // const sections = gsap.utils.toArray(".horizon");
    // const getMaxWidth = () => {
    //     maxWidth = 0;
    //     sections.forEach((section) => {
    //       maxWidth += section.offsetWidth;
    //     });
    //   };
      
    //   getMaxWidth();
      
    //   ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
      
    // gsap.to(".horizontal-container", {
    //     x: "-500vw",
    //     scrollTrigger: {
    //         x: () => -(maxWidth - window.innerWidth),
    //         trigger: ".horizontal-container",
    //         scrub: 1,
    //         end: "+=5000",
    //         pin: true
    //     }
    // });


    // tiggle special scrolltrigger
    gsap.from(".sec-1 h1, .sec-1 p, .sec-1 .btn", {
        scrollTrigger: {
            trigger: ".sec-1",
            scrub: 1,
            start: 'top center',
            end: "top 100%", 
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
    });

    //   highlight scrolltrigger
    gsap.from(".highlight", {
        scrollTrigger: {
            trigger: ".sec-2",
            scrub: 1,
            start: 'top center',
            end: 'top 100%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2
    });

    //   about best seller scrolltrigger
    gsap.from(".left-sec-3, .sec-3 #heading, .right-sec-3 h1, .right-sec-3 p, .right-sec-3 .btn, hr", {
        scrollTrigger: {
            trigger: ".sec-3",
            scrub: 1,
            start: 'top center',
            end: 'top 100%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2
    });

    //   products scrolltrigger
    gsap.from(".sec-4 #heading, .product, #next", {
        scrollTrigger: {
            trigger: ".sec-4",
            scrub: 1,
            start: 'top center',
            end: 'top 100%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2
    });
    //as seen on scrolltrigger 
    gsap.from(".row-1 img, .row-2 img, .sec-7 #heading", {
        scrollTrigger: {
            trigger: ".sec-7",
            scrub: 1,
            start: 'top center',
            end: 'top 100%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    });
    //our story scrolltrigger
    gsap.from(".sec-6 #heading, .sec-6 #text, .bg-image-sec6, .sec-6 .btn", {
        scrollTrigger: {
            trigger: ".sec-6",
            scrub: 1,
            start: 'top center',
            end: 'top bottom',
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 9
    }); 
    gsap.from(".one-story, .three-story", {
        scrollTrigger: {
            trigger: ".sec-6",
            scrub: 1,
            start: 'top center',
            end: 'top bottom',
        },
        x: -200,
        opacity: 0,
        stagger: 0.2,
        duration: 9
    });
    gsap.from(".two-story, .four-story", {
        scrollTrigger: {
            trigger: ".sec-6",
            scrub: 1,
            start: 'top center',
            end: 'top bottom',
        },
        x: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 9
    });
};
scrolltrigger()

ScrollTrigger.refresh();
