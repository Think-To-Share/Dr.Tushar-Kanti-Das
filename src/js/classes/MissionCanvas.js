import {Application, Sprite, TextStyle, Text, Graphics } from 'pixi.js'
import { DropShadowFilter } from 'pixi-filters'
import { DisplayObject } from "@pixi/display";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

export class MissionCanvas {
    canvas_width = 716
    canvas_height = 690
    spriteElements = []

    constructor() {
        this.pixiContainerElem = document.querySelector('.mission-statement-right')
    }

    init() {
        this.initializePixi();
        this.initializeGsap();
        this.addMainImages();
        this.addText();
        this.addTextBkg();
        this.setElementPosition();
    }

    initializePixi() {
        this.app = new Application({
            width: this.canvas_width,
            height: this.canvas_height,
            antialias: true,
            resolution: 2,
            backgroundAlpha: 0,
        })

        this.pixiContainerElem.appendChild(this.app.view)
        this.app.stage.sortableChildren = true;
    }

    initializeGsap() {
        gsap.registerPlugin(ScrollTrigger, PixiPlugin);
        PixiPlugin.registerPIXI({
            DisplayObject: DisplayObject,
            Graphics: Graphics,
        });
        this.imageAnimation = gsap.timeline(
            {
                scrollTrigger: {
                trigger: ".mission-statement-section",
                start: "center center",
            }}
        )
    }

    addMainImages() {
        const img_names = ['doctor', 'prescribe', 'tablets', 'left_icon', 'right_icon'];
        img_names.forEach(img => {
            const sprite = new Sprite.from(require(`../../images/mission/${img}.png`))
            sprite.pivot.set(0.5, 0.5)

            this.app.stage.addChild(sprite)

            this.spriteElements[img] = sprite;
        })
    }


    addText() {
        const headingStyle = new TextStyle({
            fontFamily: 'DM Serif Display',
            fontSize: 30,
            fontWeight: 400,
            fill: 0x0b4e85,
            align: 'left',
            wordWrap: true,
            wordWrapWidth: this.canvas_width,
        })

        const headingText = new Text('Dr. Tushar Kanti Das', headingStyle)
        headingText.x = 40
        headingText.y = 474
        this.app.stage.addChild(headingText);

        const subheadingStyle = new TextStyle({
            fontFamily: 'DM Serif Display',
            fontSize: 18,
            fontWeight: 400,
            fill: 0x696a6b,
            align: 'left',
            wordWrap: true,
            wordWrapWidth: this.canvas_width,
        })

        const subheadingText = new Text("Good physician at kalikapur \nPremises No 332, E M Bypass, Kolkata 700099", subheadingStyle)
        subheadingText.x = 40
        subheadingText.y = 510
        this.app.stage.addChild(subheadingText);

        const contentStyle = new TextStyle({
            fontFamily: 'Work Sans',
            fontSize: 16,
            fontWeight: 400,
            fill: 0x696a6b,
            align: 'left',
            wordWrap: true,
            wordWrapWidth: 380,
        })
        
        const contentText = new Text("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.", contentStyle)
        contentText.x = 40
        contentText.y = 560
        this.app.stage.addChild(contentText);
    }

    addTextBkg() {
        const bkg = new Graphics()
        bkg.beginFill(0xffffff)
        bkg.drawRoundedRect(3, 441, 459, 242, 20)
        bkg.endFill()
        
        // const dropShadow = new DropShadowFilter();
        // dropShadow.blur = 8;
        // dropShadow.color = 0x000000;
        // dropShadow.alpha = 0.1;
        // dropShadow.distance = 0;
        // dropShadow.angle = 0;
        // dropShadow.resolution = 4;
        // bkg.filters = [dropShadow];

        this.app.stage.addChild(bkg)
        bkg.zIndex = -1
    }

    setElementPosition() {
        console.log(this.spriteElements)
        const doctor = this.spriteElements.doctor
        doctor.x = 3
        doctor.y = 0

        this.imageAnimation.from(doctor, {
            pixi: {
                scale: 0,
                autoAlpha: 0
            },
            duration: 0.9,
        })

        const prescribe = this.spriteElements.prescribe
        prescribe.x = 368
        prescribe.y = 5

        this.imageAnimation.from(prescribe.scale, {
            x:0,
            y:0,
            ease: 'linear',
            duration: 0.9,
        })

        const tablets = this.spriteElements.tablets
        tablets.x = 484
        tablets.y = 320

        this.imageAnimation.from(tablets.scale, {
            x:0,
            y:0,
            ease: 'linear',
            duration: 0.9,
        })

        const left_icon = this.spriteElements.left_icon
        left_icon.x = 370
        left_icon.y = 320

        this.imageAnimation.from(left_icon.scale, {
            x:0,
            y:0,
            ease: 'linear',
            duration: 0.9,
        })

        const right_icon = this.spriteElements.right_icon
        right_icon.x = 612
        right_icon.y = 0

        this.imageAnimation.from(right_icon.scale, {
            x:0,
            y:0,
            ease: 'linear',
            duration: 0.9,
        })
    }
}
