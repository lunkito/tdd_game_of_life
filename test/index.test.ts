import * as Game from '../src/index';

// Si tiene menos de 2 vecinos o más de 3, en la siguiente muere
// Si tiene 2 o 3 se queda
// Si tiene 3 y está muerto, revive


// Crear clase célula
// Cada clase debería tener una posición y estado
// Clase estado -> habría un estado y un historico

describe('Game ', () => {
	it('Cell Should EXISTS', () => {
		expect(new Game.Cell()).toBeInstanceOf(Game.Cell);
	});
	it('Cell Should have X position', () => {
		expect(new Game.Cell(1, 1).x).toBe(1);
	});
});
