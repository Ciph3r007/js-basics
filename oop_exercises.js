// stopwatch with start, stop, reset features

function Stopwatch() {
    // kinda private properties
    let startTime, endTime;
    let duration = 0;
    let running = false;

    this.start = function () {
        if(running)
            throw new Error('Already running');
        
        startTime = new Date();
        running = true;
        console.log('Stopwatch started');
    }

    this.stop = function () {
        if(!running)
            throw new Error('Stopwatch not started');
        
        endTime = new Date();
        duration += (endTime.getTime() - startTime.getTime()) / 1000;
        running = false;
        console.log(`Stopwatch paused. Current duration: ${duration}s`);
    }

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

        console.log('Stopwatch is reset.');
    }

    Object.defineProperty(this, 'duration', {
        get: () => duration
    })
}

const sw = new Stopwatch();


/* Two constructors for HtmlElement and HtmlSelectElement
 * HtmlSelectElement inherits HtmlElement

 * HtmlElement has:
 * - click(), an instance method
 * - focus(), a prototype method
 * 
 * HtmlSelectElement takes optional `items` array as input and has:
 * - addItem() and removeItem(), both are instance methods
 */

function HtmlElement() {
    this.select = function () {
        console.log('selected');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}

const html = new HtmlElement()

function HtmlSelectElement(items=[]) {
    this.items = items

    this.addItem = item => this.items.push(item);

    this.removeItem = function (item) {
        const index = items.indexOf(item);
        items.splice(index, 1);
    }
}

// DOING THIS INSTEAD WOULD NOT INHERIT INSTANCE METHODS
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; // not necessary, just best practice

const htmlSelect = new HtmlSelectElement([1, 2, 3]);