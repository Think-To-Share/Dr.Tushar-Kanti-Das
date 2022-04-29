import { tns } from 'tiny-slider/src/tiny-slider';
import counterUp from 'counterup2';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.addEventListener('load',() =>{
    // about us section
    const headingText = document.querySelector('.about-us-heading').textContent
    gsap.set(".about-us-heading", {text:{value:''}})

    gsap.to(".about-us-heading", {
        scrollTrigger:{
            trigger: ".about-us-section",
        },
        duration: 5,
        text:{
            value:headingText,
        }, 
    })

    gsap.from(".about-us-heading-text", {
        duration: 3,
        ease: "power4.out",
        x:-50
    })

    gsap.from(".about-us-text-second", {
        duration: 3,
        ease: "power4.out",
        x:-50
    })

    gsap.from(".about-us-btn-container", {
        duration: 3,
        ease: "power4.out",
        y:50
    })
})

window.addEventListener('load',() =>{
    //membership-benefits-section
    const textAnimationTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".membership-benefits-section",
          start: "center center",
        }})

    textAnimationTl.from(".membership-image", {
        autoAlpha:0,
        x:200,
        ease: "power4.out",
        duration: 0.9,
    })

    textAnimationTl.from(".register-text", {
        y:200,
        autoAlpha:0,
        duration: 1,
        ease: "Power2.easeOut",
    })
    
    textAnimationTl.from(".pointer", {
        autoAlpha:0,
        y:50,
        duration: 1,
        ease: "power4.out",
        stagger:0.3
    })

})

window.addEventListener('load',() =>{
    // blog section
    const textAnimationT2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".blog-section",
          start: "center center",
          toggleActions: "restart none restart none",
        }
    })
    textAnimationT2.from(".blog-text", {
        autoAlpha:0,
        x:-50,
        duration:1,
        ease: "power4.out",
        stagger:0.5
    })
    textAnimationT2.from(".blog-img-container", {
        autoAlpha:0,
        y:10,
        duration: 1,
        ease: "power4.out",
        stagger:0.6,
    },"<0.5")
})

window.addEventListener('load',() =>{
    // available-locations-section
    const textAnimationT3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".available-locations-section",
          start: "center center",
          toggleActions: "restart none restart none",
        }
    })
    textAnimationT3.from(".available-locations-text", {
        autoAlpha:0,
        y:50,
        duration:2,
        ease: "power4.out",
        stagger:0.7
    })
})

if (document.querySelector('.treatment-section')) {
    const slider = tns({
        container: '.treatment-section .slides',
        items: 1,
        nav: false,
        gutter:30,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>'],
        responsive: {
            576:{
            items: 2,
            controls:false,
            },
            992:{
            items: 4,
            controls:true,
            },
        }
    })
}



ScrollTrigger.create({
    trigger: ".counter-section",
    start: "center center",
    onEnter: () => {
        document.querySelectorAll( '.counter-section .counter-main .per-text-image .counter' ).forEach(el => {
            counterUp( el, {
                duration: 3000,
            })
        })
    }
});
