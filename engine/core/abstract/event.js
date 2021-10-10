/**
 * An abstract class responsible
 * for assigning callbacks to various events
 *
 * @author Nikita Sarychev
 */
class AbstractEvent {
    #events = {};

    /**
     * Setup new callback on event
     * @param name
     * @param callback
     */
    on(name, callback) {
        if(!this.#events[name])
            this.#events[name] = [];

        this.#events[name].push(callback);
    }

    /**
     * Dispatch events
     * @param name
     * @param data
     */
    dispatch(name, data = []) {
        if(!this.#events[name])
            return;

        for(let callback of this.#events[name]) {
            callback(data);
        }
    }
}

module.exports = AbstractEvent;