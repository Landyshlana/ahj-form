import Popover from "../popover";

test('popover', () => {
    const popover = new Popover();
    popover.bindToDOM(container);
    expect(container.innerHTML).toEqual(Popover.markUp);
  });