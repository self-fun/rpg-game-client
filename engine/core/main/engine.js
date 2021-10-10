const AbstractEvent = require("../abstract/event");

const Renderer = require("renderer");

class Engine extends AbstractEvent {

    /**
     * Initialize
     * @param window
     */
    constructor(window) {
        super();

        global.window = window;
        global.document = window.document;

        this.renderer = new Renderer();
    }


}

module.exports = Engine;