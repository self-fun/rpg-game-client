const AbstractEvent = require("../abstract/event");

const Renderer = require("./renderer");
const Scene = require("./scene");
const Object2D = require("./object2d");

class Engine extends AbstractEvent {

    /**
     * Initialize
     */
    constructor() {
        super();

        this.renderer = new Renderer();

        this.scene = new Scene("Test");
        this.renderer.addScene(this.scene);

        this.background = new Object2D({x: 0, y: 0}, this.renderer.getSize());
        this.background.setFillStyle();
        this.scene.add(this.background, 0);

        this.renderer.loadScene("Test");

        this.update();
    }

    update() {
        requestAnimationFrame(() => {this.update()});
        this.renderer.render();
    }
}

module.exports = Engine;