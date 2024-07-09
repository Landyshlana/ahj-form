import Popover from '../popover';

describe('popover', () => {
	
	let container;
  
	beforeAll(async () => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
  
	afterAll(async () => {
		document.body.removeChild(container);
	})

test('bindToDOM enables markup DOM', () => {
	const popover = new Popover();
    popover.bindToDOM(container);
	expect(popover.container.innerHTML).toEqual(Popover.markUp);
});

test('геттер возвращает елемент tooltip', () => {
	const popover = new Popover();
    popover.bindToDOM(container);
	expect(popover.popover.classList.contains('popover')).toBeTruthy();
});

test('showTooltip меняет значение this.show при включении подсказки', () => {
	const popover = new Popover();
    popover.bindToDOM(container);
	popover.showTooltip(document.createElement('div'));
	expect(popover.show).toBe(true);
});
});