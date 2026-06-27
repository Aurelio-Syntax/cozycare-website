import * as THREE from "three";

export class AppCard {

    constructor(app) {

        this.app = app;

        this.width = 1.65;
        this.height = 2.45;

        this.mesh = this.create();

    }

    create() {

        //---------------------------------------
        // Canvas
        //---------------------------------------

        const canvas = document.createElement("canvas");

        canvas.width = 1024;
        canvas.height = 1536;

        const ctx = canvas.getContext("2d");

        //---------------------------------------
        // Hintergrund
        //---------------------------------------

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,1024,1536);

        //---------------------------------------
        // Header
        //---------------------------------------

        ctx.fillStyle = this.app.color;

        this.roundRect(
            ctx,
            45,
            45,
            934,
            760,
            38
        );

        ctx.fill();

        //---------------------------------------
        // Dummy Screenshot
        //---------------------------------------

        ctx.fillStyle = "rgba(255,255,255,.18)";

        for(let i=0;i<6;i++){

            ctx.fillRect(
                95,
                120+i*95,
                420,
                34
            );

        }

        //---------------------------------------
        // Titel
        //---------------------------------------

        ctx.fillStyle="#111";

        ctx.font="bold 74px Inter";

        ctx.fillText(
            this.app.title,
            70,
            950
        );

        //---------------------------------------
        // Subtitle
        //---------------------------------------

        ctx.fillStyle="#777";

        ctx.font="40px Inter";

        ctx.fillText(
            this.app.subtitle,
            70,
            1030
        );

        //---------------------------------------
        // Bottom Line
        //---------------------------------------

        ctx.fillStyle="#e8e8e8";

        ctx.fillRect(
            70,
            1120,
            884,
            2
        );

        //---------------------------------------
        // Badge
        //---------------------------------------

        this.roundRect(
            ctx,
            70,
            1180,
            170,
            58,
            29
        );

        ctx.fillStyle="#111";

        ctx.fill();

        ctx.fillStyle="#fff";

        ctx.font="28px Inter";

        ctx.fillText(
            "Flutter",
            98,
            1218
        );

        //---------------------------------------
        // Arrow
        //---------------------------------------

        ctx.fillStyle="#111";

        ctx.font="40px Inter";

        ctx.fillText(
            "→",
            900,
            1220
        );

        //---------------------------------------

        const texture = new THREE.CanvasTexture(canvas);

        texture.colorSpace = THREE.SRGBColorSpace;

        texture.anisotropy = 16;

        //---------------------------------------

        const material =
            new THREE.MeshPhysicalMaterial({

                map:texture,

                roughness:.12,

                metalness:0,

                clearcoat:1,

                clearcoatRoughness:.08,

                transparent:true

            });

        //---------------------------------------

        const geometry =
            new THREE.PlaneGeometry(
                this.width,
                this.height
            );

        //---------------------------------------

        return new THREE.Mesh(
            geometry,
            material
        );

    }

    //---------------------------------------

    roundRect(ctx,x,y,w,h,r){

        ctx.beginPath();

        ctx.moveTo(x+r,y);

        ctx.arcTo(x+w,y,x+w,y+h,r);

        ctx.arcTo(x+w,y+h,x,y+h,r);

        ctx.arcTo(x,y+h,x,y,r);

        ctx.arcTo(x,y,x+w,y,r);

        ctx.closePath();

    }

}