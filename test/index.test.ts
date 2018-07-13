// import { historic, evalGeneration } from '../src/index';
import { Cell } from '../src/Cell';
import { World } from '../src/World';
import { Empty } from '../src/Empty';

// Si tiene menos de 2 vecinos o más de 3, en la siguiente muere
// Si tiene 2 o 3 se queda
// Si tiene 3 y está muerto, revive


// Crear clase célula
// Cada clase debería tener una posición y estado
// Clase estado -> habría un estado y un historico

describe('Cell ', () => {
	it('Should EXISTS', () => {
		expect(new Cell()).toBeInstanceOf(Cell);
	});
	it('Should have position', () => {
		expect(new Cell(1, 1).x).toBe(1);
		expect(new Cell(1, 1).y).toBe(1);
	});
	it('Should be alive', () => {
		expect(new Cell().isAlive).toBe(true);
	});
	it('Should die when Kill() is called', () => {
		const cell = new Cell();
		cell.kill();
		expect(cell.isAlive).toBe(false);
	});
	it('Should revive', () => {
		const cell = new Cell();
		cell.kill();
		cell.revive();
		expect(cell.isAlive).toBe(true);
	});
});

describe('World', () => {
	it('Should do something', () => {
		expect(new World()).toBeInstanceOf(World);
	});

	it('should has map', () => {
		const map = [
			[new Empty(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Empty()],
		];
		expect(new World().worldMap).toEqual(map);
	});
});

// xdescribe('Historic', () => {
// 	it('should be a collection', () => {
// 		console.log(`Game historic: ${typeof(historic)}`);
// 		expect(historic).toEqual([new Cell()]);
// 	});
// });


// xdescribe('Generation', () => {
// 	it('should return historic', () => {
// 		expect(evalGeneration()).toBe(historic);
// 	});
// });
