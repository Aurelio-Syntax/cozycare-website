import * as THREE from "three";

import { Stage } from "./Stage.js";
import { CameraRig } from "./CameraRig.js";
import { Physics } from "./physics.js";
import { Carousel } from "./carousel/Carousel.js";

export class SceneManager {

    constructor(container) {

        this.container = container;

    }

    start() {

        // ----------------------------------
        // Scene
        // ----------------------------------

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);

        // ----------------------------------
        // Camera
        // ----------------------------------

        this.camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        this.camera.position.set(0, 0.2, 9);

        // ----------------------------------
        // Renderer
        // ----------------------------------

        this.renderer = new THREE.WebGLRenderer({

            antialias: true,
            alpha: false

        });

        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        this.renderer.outputColorSpace =
            THREE.SRGBColorSpace;

        this.container.appendChild(
            this.renderer.domElement
        );

        // ----------------------------------
        // Stage
        // ----------------------------------

        this.stage = new Stage(this.scene);

        // ----------------------------------
        // Physics
        // ----------------------------------

        this.physics = new Physics(
            this.renderer.domElement
        );

        // ----------------------------------
        // Camera Rig
        // ----------------------------------

        this.cameraRig = new CameraRig(
            this.camera
        );

        // ----------------------------------
        // Carousel
        // ----------------------------------

        this.carousel = new Carousel(
            this.scene,
            this.physics
        );

        // ----------------------------------
        // Resize
        // ----------------------------------

        window.addEventListener(
            "resize",
            this.onResize
        );

        this.onResize();

        // ----------------------------------
        // Loop
        // ----------------------------------

        this.clock = new THREE.Clock();

        this.renderer.setAnimationLoop(
            this.animate
        );

    }

    animate = () => {

        const dt = this.clock.getDelta();

        this.physics.update(dt);

        this.carousel.update(dt);

        this.cameraRig.update(dt);

        this.renderer.render(
            this.scene,
            this.camera
        );

    }

    onResize = () => {

        this.camera.aspect =
            window.innerWidth /
            window.innerHeight;

        this.camera.updateProjectionMatrix();

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }

}