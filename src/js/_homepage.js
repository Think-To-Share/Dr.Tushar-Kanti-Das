import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.addEventListener('load',() =>{
    const headingText = document.querySelector('.about-us-heading').textContent
    gsap.set(".about-us-heading", {text:{value:''}})

    gsap.to(".about-us-heading", {
        scrollTrigger:{
            trigger: ".about-us-heading",
        },
        duration: 5,
        // repeat:-1,
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