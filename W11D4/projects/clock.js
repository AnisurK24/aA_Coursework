class Clock {
	constructor() {
		let current = new Date();
		this.hours = current.getHours();
		this.minutes = current.getMinutes();
		this.seconds = current.getSeconds();
		this.printTime();
		setInterval (this._tick.bind(this), 1000);
	}

	printTime(){
		console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
	}

	_tick() {
		this.seconds += 1;

		if (this.seconds === 60){
			this.seconds = 0;
			this.minutes += 1;
		}

		if (this.minutes === 60){
			this.minutes = 0;
			this.hours += 1;
		}

		if (this.hours === 25){
			this.hours = 0;
		}

		this.printTime();
	}

}

let theClock = new Clock();