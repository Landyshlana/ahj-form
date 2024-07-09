export default class Popover {
	constructor(container) {
		this.container = container;
		this.show = false;
	}

	initPopover() {
		this.bindToDOM();
		this.buttonEl = this.container.querySelector('.btn');
		this.buttonEl.addEventListener('click', (e) => {
			e.preventDefault();
			this.showTooltip();
		});
	}

	static get markUp() {
		return `
	  <div class="popover hidden">
			  <h3 class="title">Popover title</h3>
			  <p class="text">And here's some amazing content.It's very engaging.Right?</p>
  </div>
  `;
	}

	get popover() {
		return this.container.querySelector('.popover');
	}

	bindToDOM() {
		this.container.insertAdjacentHTML('afterbegin', this.container.markUp);
	}

	showTooltip() {
		this.popover.classList.toggle('hidden');
		this.show = !this.popover.classList.contains('hidden');
	}
}