import Popover from '../popover';

const container = document.createElement('div');
const popoverEl = new Popover(container);
popoverEl.bindToDOM();

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