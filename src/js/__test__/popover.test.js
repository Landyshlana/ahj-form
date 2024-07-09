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
	expect(popoverEl.container.innerHTML).toEqual(Popover.markUp);
});

test('геттер возвращает елемент tooltip', () => {
	expect(popoverEl.popover.classList.contains('popover')).toBeTruthy();
});

test('showTooltip меняет значение this.show при включении подсказки', () => {
	popoverEl.showTooltip(document.createElement('div'));
	expect(popoverEl.show).toBe(true);
});
});