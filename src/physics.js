export class Physics {

    constructor(domElement) {

        this.rotation = 0;

        this.velocity = 0;

        this.dragging = false;

        this.lastX = 0;

        domElement.addEventListener(
            "pointerdown",
            this.pointerDown
        );

        window.addEventListener(
            "pointermove",
            this.pointerMove
        );

        window.addEventListener(
            "pointerup",
            this.pointerUp
        );

    }

    pointerDown = (event) => {

        this.dragging = true;

        this.lastX = event.clientX;

    }

    pointerMove = (event) => {

        if (!this.dragging) return;

        const delta =
            event.clientX - this.lastX;

        this.lastX = event.clientX;

        this.velocity =
            delta * 0.0035;

    }

    pointerUp = () => {

        this.dragging = false;

    }

    update(deltaTime) {

        this.rotation += this.velocity;

        this.velocity *= 0.94;

        this.rotation += deltaTime * 0.06;

    }

}