import * as THREE from "three";

export class CameraRig {

    constructor(camera) {

        this.camera = camera;

        this.mouse = new THREE.Vector2();

        this.target = new THREE.Vector3(
            0,
            0.2,
            9
        );

        window.addEventListener(
            "pointermove",
            this.onPointerMove
        );

    }

    onPointerMove = (event) => {

        this.mouse.x =
            (event.clientX / window.innerWidth) * 2 - 1;

        this.mouse.y =
            -(event.clientY / window.innerHeight) * 2 + 1;

    }

    update() {

        this.target.x = this.mouse.x * 0.45;
        this.target.y = this.mouse.y * 0.20;

        this.camera.position.x +=
            (this.target.x - this.camera.position.x) * 0.05;

        this.camera.position.y +=
            (this.target.y - this.camera.position.y) * 0.05;

        this.camera.lookAt(0,0,0);

    }

}