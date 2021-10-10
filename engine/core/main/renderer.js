class Renderer {
    #canvas;
    #context;
    #currentScene;
    #scenes = {};

    /**
     * Initialize
     */
    constructor() {
        this.#canvas = document.createElement("canvas");
        this.setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        this.#context = this.#canvas.getContext("2d");
        document.body.appendChild(this.#canvas);

        global.ctx = this.#context;
    }

    /**
     * Add scenes
     * @param scene
     */
    addScene(scene) {
        this.#scenes[scene.getName()] = scene;
    }

    /**
     * Load scene for render
     */
    loadScene(name) {
        if(!this.#scenes[name])
            return;

        this.#currentScene = name;
    }

    /**
     * Render scene
     */
    render() {
        if(!this.#currentScene)
            return;

        this.#scenes[this.#currentScene].render();
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
     * Getter size
     */
    getSize() {
        return {width: this.#canvas.width, height: this.#canvas.height};
    }

    /**
     * Canvas getter
     */
    getCanvas() {
        return this.#canvas;
    }
}

module.exports = Renderer;