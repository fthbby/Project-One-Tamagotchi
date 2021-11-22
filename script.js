console.log ('hello')


//------- attempt to create the stats bar buttons wtih classes ----//

class StatsBar {
    constructor(barSize, color) {
        this.barSize = barSize;
        this.color = color;

    }
}


const energy = new StatsBar(100, 'green')
const hunger = new StatsBar(0,'yellow')
const boredom = new StatsBar(0,'orange')

console.log(energy)
console.log(hunger)
console.log(boredom)