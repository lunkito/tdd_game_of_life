export class Cell {
	x: Number;
	y: Number;
	isAlive: Boolean;
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
		this.isAlive = true;
	}
	kill() {
		this.isAlive = false;
	}
	revive() {
		this.isAlive = true;
	}
}