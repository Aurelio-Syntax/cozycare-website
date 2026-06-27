import * as THREE from "three";
import { apps } from "../data.js";
import { AppCard } from "./AppCard.js";

export class Carousel {

    constructor(scene, physics) {

        this.scene = scene;
        this.physics = physics;

        this.group = new THREE.Group();
        this.scene.add(this.group);

        this.cards = [];

        this.radius = 4.3;

        this.height = 0;

        this.build();

    }

    build() {

        apps.forEach((app, index) => {

            const card = new AppCard(app);

            card.index = index;

            this.cards.push(card);

            this.group.add(card.mesh);

        });

    }

    update(dt) {

        const time = performance.now() * 0.001;

        const total = this.cards.length;

        this.cards.forEach((card, index) => {

            const mesh = card.mesh;

            const angle =
                this.physics.rotation +
                (index / total) * Math.PI * 2;

            //------------------------------------
            // Position
            //------------------------------------

            mesh.position.x =
                Math.sin(angle) * this.radius;

            mesh.position.z =
                Math.cos(angle) * this.radius;

            mesh.position.y =
                Math.sin(time * 2 + index) * 0.05;

            //------------------------------------
            // Rotation
            //------------------------------------

            mesh.lookAt(0, 0, 0);

            //------------------------------------
            // Depth
            //------------------------------------

            const depth =
                (mesh.position.z + this.radius) /
                (this.radius * 2);

            //------------------------------------
            // Scale
            //------------------------------------

            const scale =
                THREE.MathUtils.lerp(
                    0.68,
                    1.05,
                    depth
                );

            mesh.scale.set(
                scale,
                scale,
                scale
            );

            //------------------------------------
            // Opacity
            //------------------------------------

            mesh.material.opacity =
                THREE.MathUtils.lerp(
                    0.25,
                    1,
                    depth
                );

            //------------------------------------
            // Lift
            //------------------------------------

            mesh.position.y +=
                depth * 0.15;

            //------------------------------------
            // Tilt
            //------------------------------------

            mesh.rotation.z =
                Math.sin(time + index) * 0.02;

            //------------------------------------
            // Render Order
            //------------------------------------

            mesh.renderOrder =
                Math.floor(depth * 100);

        });

        //------------------------------------
        // Sortieren
        //------------------------------------

        this.cards.sort((a, b) => {

            return a.mesh.position.z - b.mesh.position.z;

        });

    }

}