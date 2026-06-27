import * as THREE from "three";

export class Stage {

    constructor(scene) {

        this.scene = scene;

        this.createLights();
        this.createFloor();

    }

    createLights() {

        // Ambient

        this.scene.add(

            new THREE.AmbientLight(
                0xffffff,
                1.2
            )

        );

        // Key

        const key = new THREE.DirectionalLight(
            0xffffff,
            3.0
        );

        key.position.set(
            5,
            8,
            6
        );

        this.scene.add(key);

        // Rim

        const rim = new THREE.DirectionalLight(
            0xb8dcff,
            1.3
        );

        rim.position.set(
            -6,
            4,
            -5
        );

        this.scene.add(rim);

    }

    createFloor() {

        const geometry =
            new THREE.CircleGeometry(
                20,
                64
            );

        const material =
            new THREE.MeshBasicMaterial({

                color:0xf5f5f5

            });

        const floor =
            new THREE.Mesh(
                geometry,
                material
            );

        floor.rotation.x =
            -Math.PI/2;

        floor.position.y =
            -1.35;

        this.scene.add(floor);

    }

}