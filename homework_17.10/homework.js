class Emitter {
  constructor() {
    this.listeners = {};
  }

  on (eventName, listener) {
    if (!eventName) {
      return console.log(`${eventName}" is not valid.`);
    }
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listener);
  }

  prependListener(eventName, listener) {
    if (!eventName) {
      return console.log(`${eventName}" is not valid.`)
    }
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].unshift(listener);
    console.log(this.listeners)
  }

  removeListener(eventName, listenerToRemove) {
    if (!this.listeners[eventName]) {
      console.log(`Can't remove the listener. "${eventName}" doesn't exist.`);
    }

    const filterListeners = (listener) => listener !== listenerToRemove;

    this.listeners[eventName] = this.listeners[eventName].filter(filterListeners);
  }

  emit(eventName, ...args) {
    if (!this.listeners[eventName] || !eventName) {
      console.log(`${eventName} doesn't exist`);
    }

    for (let i = 0; i < this._listeners[eventName].length; i++) {
      this._listeners[eventName][i](...args);
    }
  }
}

let testEmitter = new Emitter();

// let eventFn = () => {
//   console.log("Console.log event");
// }

// testEmitter.on("Event1", eventFn);
