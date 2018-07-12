import * as Game from '../src/index';
import * as Cell from '../src/Cell';

// Si tiene menos de 2 vecinos o más de 3, en la siguiente muere
// Si tiene 2 o 3 se queda
// Si tiene 3 y está muerto, revive


// Crear clase célula
// Cada clase debería tener una posición y estado
// Clase estado -> habría un estado y un historico

describe('Cell ', () => {
	it('Should EXISTS', () => {
		expect(new Cell.Cell()).toBeInstanceOf(Cell.Cell);
	});
	it('Should have position', () => {
		expect(new Cell.Cell(1, 1).x).toBe(1);
		expect(new Cell.Cell(1, 1).y).toBe(1);
	});
	it('Should be alive', () => {
		expect(new Cell.Cell().isAlive).toBe(true);
	});
	it('Should die when Kill() is called', () => {
		const cell = new Cell.Cell();
		cell.kill();
		expect(cell.isAlive).toBe(false);
	});
	it('Should revive', () => {
		const cell = new Cell.Cell();
		cell.kill();
		cell.revive();
		expect(cell.isAlive).toBe(true);
	});
});

describe.skip('Historic', () => {
	it('should be a collection', () => {
		console.log(`Game historic: ${typeof(Game.historic)}`);
		expect(Game.historic).toEqual([new Cell.Cell()]);
	});
});


describe('Generation', () => {
	it('should return historic', () => {
		expect(Game.evalGeneration()).toBe(Game.historic);
	});
});
