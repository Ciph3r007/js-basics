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
