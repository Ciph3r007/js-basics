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


/* Three constructors for HtmlElement, HtmlSelectElement, HtmlImageElement
 * HtmlSelectElement and HtmlImageElement inherit HtmlElement

 * HtmlElement has:
 * - click(), an instance method
 * - focus(), a prototype method
 * 
 * HtmlSelectElement takes optional `items` array as input and has:
 * - addItem() and removeItem(), both are instance methods
 * - render(), an instance method returning html codes for selected items
 * 
 * HtmlImageElement takes `src` as input and has:
 * - render(), an instance method returning html codes for image source
 */

function HtmlElement() {
    this.select = function () {
        console.log('selected');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}

function HtmlSelectElement(items=[]) {
    this.items = items

    this.addItem = item => this.items.push(item);

    this.removeItem = function (item) {
        const index = items.indexOf(item);
        items.splice(index, 1);
    }

    this.render = function () {
        return `
        <select>
            ${this.items.map(item => `<option>${item}</option>`).join('')}
        </select>`;
    }
}

function HtmlImageElement(src) {
    this.src = src;
    this.render = () => `<img src="${this.src}"></img>`;
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlImageElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; // not necessary, just best practice
HtmlImageElement.prototype.constructor = HtmlImageElement;

// INHERITING LIKE THIS INSTEAD WOULD NOT INHERIT INSTANCE METHODS
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);


const html = new HtmlElement();
const select = new HtmlSelectElement([1, 2, 3]);
const img = new HtmlImageElement('https://thispersondoesnotexist.com/');

const elements = [select, img];

for (const element of elements) {
    console.log(element.render());
}