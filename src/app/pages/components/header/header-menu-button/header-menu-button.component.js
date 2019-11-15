/* ES6 module */

export class HeaderMenuButtonComponent {
	constructor() {
		this.HeaderMenuButtonInit();
	}

	HeaderMenuButtonInit() {
		this.clickMenuButton();
	}

	clickMenuButton() {
		const menuBtn = document.querySelector('.obw-header .obw-menu-button');
		const headerOBW = document.querySelector('.obw-header');

		menuBtn.addEventListener('click', () => {
			headerOBW.classList.toggle('is-open');
		});
	}
}
