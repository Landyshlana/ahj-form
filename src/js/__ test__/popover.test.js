import Popover from "../popover";

const container = document.createElement('div');
const popover = new Popover(container);
popover.bindToDOM();

test('popover', () => {
	expect(popover.container.innerHTML).toEqual(Popover.markUp);
});