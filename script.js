console.log ('hello')


//------- attempt to create the stats bar buttons wtih classes ----//


class StatsBar {
    constructor(x,y,w,h,maxBarSize,color) {
        this.x =x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxBarSize = maxBarSize;
        this.color = color;
        this.maxWidth = w;
        this.energy = maxBarSize;
        this.hunger = maxBarSize;
        this.boredom = maxBarSize;

    }

}


const energyBar = new StatsBar(20,20,200,30,10000, 'green')




const statsBar = document.getElementsByClassName('stats-bar')[0];

setInterval(() => {
    const computedStyle = getComputedStyle(statsBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    statsBar.style.setProperty('--width', width +.05)
}, (5));
