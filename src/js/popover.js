export default class Popover {
	constructor(container) {
		this.container = container;
	}

	static get markUp() {
		return `
        <div class="popover-container hidden">
            <h3 class="title">Popover title</h3>
            <p class="text">And here's some amazing content.It's very engaging.Right?</p>
      </div>
  <button class="btn">Click to toggle popover</button>`
	}

	bindToDOM() {
		if (!this.container === 0) return;
		this.container.innerHTML = Popover.markUp;
	}


	initPopover() {
		if (!this.container === 0) return;
		this.bindToDOM();
		const btn = this.container.querySelector(".btn");
		btn.addEventListener("click", (e) => {
			this.onclick(e);
			this.positionPopover(e);

		});
	};
	onclick() {
		this.tooltip = this.container.querySelector(".popover-container");
		this.tooltip.classList.toggle('hidden');
	}
	positionPopover(e) {
		const btnclick = e.currentTarget.getBoundingClientRect(e);
		const popoversize = this.tooltip.getBoundingClientRect()
		const left = btnclick.left + btnclick.width / 2 - popoversize.width / 2 + window.scrollX;
		const top = btnclick.top - (popoversize.height) - window.scrollY;
		this.tooltip.style.left = `${left}px`;
		this.tooltip.style.top = `${top}px`;
	};
};