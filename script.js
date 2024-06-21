const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// loading animation
function loader() {
    function showContent() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('main').style.display = 'block';
    }


    window.addEventListener('load', function () {
        setTimeout(showContent, 0);
    });

    let loadertl = gsap.timeline()

    loadertl.to("#main", {
        display: "none",
        duration: 0.1,
        delay: -1
    })

    loadertl.to(".bg-loader", {
        bottom: "0%",
        height: "100%",
        duration: 0.4,
        delay: 0.8
    })

    loadertl.from(".text-loader h1 span", {
        opacity: 0,
        x: 20,
        stagger: 0.19,
        duration: 0.5
    })

    loadertl.to(".text-loader h1 span", {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.2,
        delay: 0.3
    })

    loadertl.to(".bg-loader", {
        bottom: "100%",
        height: "0%",
        duration: 0.4,
        oncomplete: function () {
            animatehomepage();
        }
    })
}
loader()

// home page animation
// function animatehomepage() {
//     let hometl = gsap.timeline()
//     hometl.from(".logo", {
//         y: -100,
//         duration: 0.5,
//         opacity: 0,
//         delay: 1, 
//     })
//     hometl.from('.nav-partition', {
//         opacity:0
//     })
//     hometl.from(".links li, #nav-bag", {
//         y: -40,
//         stagger: 0.1,
//         opacity: 0,
//         duration: 0.4,
//     })
//     hometl.from('.left-home h1 span', {
//         y: 50,
//         duration: 0.6,
//         stagger: 0.1,
//         opacity: 0,
//         delay: -0.9,
//     })
//     hometl.from('.btn', {
//         x: -50,
//         duration: 0.4,
//         opacity: 0,
//     })
//     hometl.from('.right-home', {
//         x: 200,
//         duration: 0.6,
//         opacity: 0,
//         delay: -0.2,
//     })
//     hometl.from('.home-beans', {
//         x: -100,
//         duration: 0.6,
//         opacity: 0,
//         delay: -0.4,
//     })
// }
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

}
dropdown()

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
                y: 50,
                opacity: 0,
                stagger: 0.19,
                duration: 0.6
            })
            navtl.from('#nav-close', {
                opacity: 0
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
            const navtlclose = gsap.timeline()

            navtlclose.to('.active', {
                right: '-100vw',
                duration: 0.8,
            })
            navtlclose.to('.active li', {
                y: 50,
                opacity: 0,
                stagger: 0.19,
                duration: 0.6
            })
            navtlclose.to('#nav-close', {
                opacity: 0
            })
        }
    })
}
navresponsive()

// cursor follower
function mousefollower() {
    const content = document.querySelectorAll('.left-home, .btn, .right-home')
    const content2 = document.querySelectorAll(".links li")
    const cursor = document.querySelector(".cursor-follower")
    const page1 = document.querySelector(".home")

    window.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            duration: 0.2,
            opacity: 1,
            x: e.clientX - 1,
            y: e.clientY - 1,
            delay: 0.1
        })
    })


    page1.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            opacity: 0,
        })
    })
    // content hovering
    content.forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: "80px",
                height: "80px",
                backgroundColor: "#FFF6DD",
                duration: 0.2,
                mixBlendMode: 'difference',
            })
        })
    })

    content.forEach(link => {
        link.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: "40px",
                height: "40px",
                backgroundColor: "transparent",
                duration: 0.2,
                mixBlendMode: 'normal',
            })
        })
    })


    // links hovering

    content2.forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                width: "60px",
                height: "60px",
                backgroundColor: "#fff6dd",
                duration: 0.2,
                mixBlendMode: 'difference',
            })
        })
    })

    content2.forEach(link => {
        link.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                width: "40px",
                height: "40px",
                backgroundColor: "transparent",
                duration: 0.2,
                mixBlendMode: 'normal',
            })
        })
    })
}
mousefollower()

// sec-2 marquee

window.addEventListener('wheel', function(dets){
    if(dets.deltaY<0){
        gsap.to('.marquee', {
            transform: 'translateX(-200%)',
            duration: 2,
            repeat: -1,
            ease:'none'
        })
    }
    else{
        gsap.to('.marquee', {
            transform: 'translateX(0%)',
            duration: 2,
            repeat: -1,
            ease:'none'
        })
    }
})

// gsap scroll trigger

gsap.from('.one-high', {
    scrollTrigger:{
        trigger:"h1",
        start:"top 20%", 
        end: "top  0%",
        markers: true,
    },
    y:90,
    duration: 0.8,
    opacity: 0
})