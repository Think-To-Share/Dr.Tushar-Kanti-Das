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