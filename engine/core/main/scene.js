class Scene {
    #name;
    #objects = {};

    /**
     * Initialize scene
     * @param name
     */
    constructor(name) {
        this.#name = name;
    }

    /**
     * Get name
     */
    getName() {
        return this.#name;
    }

    /**
     * Add to scene
     * @param object
     * @param layer
     */
    add(object, layer = 0) {
        if(!this.#objects[layer])
            this.#objects[layer] = [];

        this.#objects[layer].push(object);
    }

    /**
     * Render scene
     */
    render() {
        for(let layer in this.#objects) {
            for(let object of this.#objects[layer]) {
                object.render();
            }
        }
    }
}

module.exports = Scene;