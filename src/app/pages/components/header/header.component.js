/* ES6 module */

export class HeaderComponent {
	constructor() {
		this.init();
	}

	clickMenu() {
		const menuBtn = document.querySelector('.obw-header .obw-menu-button');
		const headerOBW = document.querySelector('.obw-header');

		menuBtn.addEventListener('click', () => {
			headerOBW.classList.toggle('is-open');
		});
	}

	menuAnimation() {
		const line = document.querySelector('.obw-menu-line');
		const listLinks = document.querySelectorAll('.obw-menu .obw-menu-link');

		for (let i = 0; i < listLinks.length; i++) {
			listLinks[i].addEventListener('click', e => e.preventDefault());
			listLinks[i].addEventListener('mouseenter', mouseenterFunc);
		}

		function mouseenterFunc() {
			for (let i = 0; i < listLinks.length; i++) {
				if (listLinks[i].parentNode.classList.contains('active')) {
					listLinks[i].parentNode.classList.remove('active');
				}
				listLinks[i].style.opacity = '0.25';
			}

			this.parentNode.classList.add('active');
			this.style.opacity = '1';

			const width = this.getBoundingClientRect().width;
			const height = this.getBoundingClientRect().height;
			const left = this.getBoundingClientRect().left;
			const top = this.getBoundingClientRect().top;

			line.style.width = `${width}px`;
			line.style.height = `${height}px`;
			line.style.left = `${left}px`;
			line.style.top = `${top}px`;
			line.style.transform = 'none';
		}

		function resizeFunc() {
			const active = document.querySelector(
				'.obw-menu .obw-menu-item.active'
			);

			if (active) {
				const left =
					active.getBoundingClientRect().left + window.pageXOffset;
				const top =
					active.getBoundingClientRect().top + window.pageYOffset;

				line.style.left = `${left}px`;
				line.style.top = `${top}px`;
			}
		}

		window.addEventListener('resize', resizeFunc);
	}

	init() {
		this.clickMenu();
		// if (window.matchMedia('(min-width: 1100px)').matches) {
		// 	this.menuAnimation();
		// }
	}
}
