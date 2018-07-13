import { Empty } from './Empty';

export class World {
	worldMap;
	constructor() {
		this.worldMap = [
			[new Empty(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Empty()],
		];
	}
}