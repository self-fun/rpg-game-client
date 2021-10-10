class Object2D {
    #fillStyle;
    #position;
    #size;

    /**
     * Initialize object
     * @param position
     * @param size
     */
    constructor(position = {x: 0, y: 0}, size = {w: 0, h: 0}) {
        this.#position = position;
        this.#size = size;
    }

    /**
     * Setter fillStyle
     */
    setFillStyle(fillStyle = "green") {
        this.#fillStyle = fillStyle;
    }

    /**
     * Setter position
     * @param position
     */
    setPosition(position = {x: 0, y: 0}) {
        this.#position = position;
    }

    /**
     * Setter size
     * @param size
     */
    setSize(size = {width: 0, height: 0}) {
        this.#size = size;
    }

    /**
     * Render object
     */
    render() {
        ctx.beginPath();
        ctx.fillStyle = this.#fillStyle;
        ctx.fillRect(this.#position.x, this.#position.y, this.#size.width, this.#size.height);
        ctx.closePath();
    }
}

module.exports = Object2D;