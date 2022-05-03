import {Application, Sprite, Graphics} from 'pixi.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

export class BannerCanvas {
    canvas_width = 808
    canvas_height = 572

    constructor(){
        this.pixiContainerElem = document.querySelector('.banner-image-right')
    }

    init(){
        this.initializePixi();
        this.initializeGsap();
        this.addMainImages();
        this.loadElements();
    }

    initializePixi(){
        this.app = new Application({
            width: this.canvas_width,
            height: this.canvas_height,
            antialias: true,
            backgroundAlpha: 0,
        })
        this.pixiContainerElem.appendChild(this.app.view)
        this.app.stage.sortableChildren = true;
    }

    initializeGsap() {
        gsap.registerPlugin(ScrollTrigger, PixiPlugin);
    }

    addMainImages(){
        const image_names = ['doctor_image', 'saline_water', 'check_up_doctor', 'stethoscope', 'injection', 'testing', 'doctor_plus', 'tablet', 'banner_icon_blue', 'banner_icon_yellow', 'banner_icon_green', 'banner_icon_circle_blue']
        image_names.forEach(image => {
            this.app.loader.add(image, require(`../../images/banner/${image}.png`))
        })
    }

    loadElements(){
        this.app.loader.load((load, res) => {
            const doctor = new Sprite(res.doctor_image.texture)
            doctor.x = 3
            doctor.y = 0

            
            const imageAnimation = gsap.timeline()
            imageAnimation.from(doctor.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const saline = new Sprite(res.saline_water.texture)
            saline.x = 353
            saline.y = 0

            imageAnimation.from(saline.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const checkup = new Sprite(res.check_up_doctor.texture)
            checkup.x = 353
            checkup.y = 117

            imageAnimation.from(checkup.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const stethoscope = new Sprite(res.stethoscope.texture)
            stethoscope.x = 585
            stethoscope.y = 230

            imageAnimation.from(stethoscope.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const injection = new Sprite(res.injection.texture)
            injection.x = 3
            injection.y = 350

            imageAnimation.from(injection.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const testing = new Sprite(res.testing.texture)
            testing.x = 120
            testing.y = 350

            imageAnimation.from(testing.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const doctorplus = new Sprite(res.doctor_plus.texture)
            doctorplus.x = 353
            doctorplus.y = 350

            imageAnimation.from(doctorplus.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const tablet = new Sprite(res.tablet.texture)
            tablet.x = 470
            tablet.y = 350

            imageAnimation.from(tablet.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const blueicon = new Sprite(res.banner_icon_blue.texture)
            blueicon.x = 2
            blueicon.y = 465

            imageAnimation.from(blueicon.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const yellowicon = new Sprite(res.banner_icon_yellow.texture)
            yellowicon.x = 465
            yellowicon.y = 0

            imageAnimation.from(yellowicon.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const greenicon = new Sprite(res.banner_icon_green.texture)
            greenicon.x = 585
            greenicon.y = 117

            imageAnimation.from(greenicon.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            const bluecircleicon = new Sprite(res.banner_icon_circle_blue.texture)
            bluecircleicon.x = 695
            bluecircleicon.y = 230

            imageAnimation.from(bluecircleicon.scale, {
                x:0,
                y:0,
                duration: 0.9,
            })

            this.app.stage.addChild(doctor)
            this.app.stage.addChild(saline)
            this.app.stage.addChild(checkup)
            this.app.stage.addChild(stethoscope)
            this.app.stage.addChild(injection)
            this.app.stage.addChild(testing)
            this.app.stage.addChild(doctorplus)
            this.app.stage.addChild(tablet)
            this.app.stage.addChild(blueicon)
            this.app.stage.addChild(yellowicon)
            this.app.stage.addChild(greenicon)
            this.app.stage.addChild(bluecircleicon)
        })
    }
}