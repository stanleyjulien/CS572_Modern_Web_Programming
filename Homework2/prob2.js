const EventEmitter = require('events');
/*class Ticker extends EventEmitter
{
	constructor()
	{
		super();
		this.message = 'New Student!';
	}

	visit()
	{
		console.log(this.message);
		this.on('newStu', () => {console.log('This is the new Student event');})
		this.emit('newStu');
	}

}


const ticker = new Ticker();
ticker.visit();
*/



class Ticker extends EventEmitter
{
	start()
	{
		setInterval( () => {this.emit('tick')}, 1000);
	}
}

const ticker = new Ticker();
ticker.on('tick', () => {console.log('TICK');});
ticker.start();

