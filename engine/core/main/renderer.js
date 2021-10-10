class Renderer {
    #canvas;

    /**
     * Initialize
     */
    constructor() {
        this.#canvas = document.createElement("canvas");
    }

    /**
     * Set size for renderer object
     * @param width
     * @param height
     */
    setSize({width, height} = {width: 500, height: 500}) {
        this.#canvas.width = width;
        this.#canvas.height = height;
    }

    /**
     * Canvas getter
     */
    getCanvas() {
        return this.#canvas;
    }
}

module.exports = Renderer;