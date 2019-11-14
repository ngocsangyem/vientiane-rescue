/* ES6 module */
import { nodeToArray } from '../../../shared/helpers/index';

export class HeaderComponent {
	constructor() {
		this.init();
	}

	init() {
		this.clickMenu();
		this.scrollSpy();
		this.smoothMenuLink();
	}

	clickMenu() {
		const menuBtn = document.querySelector('.obw-header .obw-menu-button');
		const headerOBW = document.querySelector('.obw-header');

		menuBtn.addEventListener('click', () => {
			headerOBW.classList.toggle('is-open');
		});
	}

	slidingUnderline() {
		const breakpoint = window.matchMedia('(min-width: 1100px)').matches;
		let activeLink = document.querySelector(
			'.obw-header .obw-menu-list .obw-menu-item.is-active'
		);
		let underline = document.querySelector(
			'.obw-header .obw-menu-navbar .obw-menu-line'
		);
		const menuList = document.querySelector('.obw-header .obw-menu-list');
		const menuLinkList = nodeToArray(
			document.querySelectorAll(
				'.obw-header .obw-menu-list .obw-menu-item'
			)
		);
		const menuAnchors = nodeToArray(
			document.querySelectorAll(
				'.obw-header .obw-menu-list .obw-menu-item'
			)
		);

		function setActiveUnderline(activeLink, underline) {
			underline.style.left = activeLink.offsetLeft + 'px';
			underline.style.width = activeLink.offsetWidth + 'px';
		}

		if (activeLink && breakpoint) {
			setActiveUnderline(activeLink, underline);

			menuList.addEventListener('mouseover', function(event) {
				let selectedWidth = event.target.offsetWidth;
				let newleftpos = event.target.offsetLeft;
				underline.style.left = newleftpos + 'px';
				underline.style.width = selectedWidth + 'px';
			});

			menuList.addEventListener('mouseout', function(event) {
				underline.style.left = activeLink.offsetLeft + 'px';
				underline.style.width = activeLink.offsetWidth + 'px';
			});

			menuAnchors.forEach(anchor => {
				anchor.addEventListener('click', function(event) {
					event.preventDefault();
					menuLinkList.forEach(list => {
						list.classList.remove('is-active');
					});
					event.target.parentNode.classList.add('is-active');

					activeLink = document.querySelector(
						'.obw-header .obw-menu-list .obw-menu-item.is-active'
					);
					underline = document.querySelector('.obw-menu-line');

					setActiveUnderline(activeLink, underline);
				});
			});
		}
	}

	smoothMenuLink() {
		const menuLinks = document.querySelectorAll('.obw-menu-link');
		const headerOBW = document.querySelector('.obw-header');
		for (let nav in menuLinks) {
			if (menuLinks.hasOwnProperty(nav)) {
				menuLinks[nav].addEventListener('click', e => {
					e.preventDefault();
					headerOBW.classList.remove('is-open');
					document.querySelector(menuLinks[nav].hash).scrollIntoView({
						behavior: 'smooth'
					});
				});
			}
		}
	}

	scrollSpy() {
		const sections = document.querySelectorAll('.chapter-container');

		window.onscroll = () => {
			const scrollPos =
				document.documentElement.scrollTop || document.body.scrollTop;

			for (let section in sections)
				if (
					sections.hasOwnProperty(section) &&
					sections[section].offsetTop - 88 <= scrollPos
				) {
					const id = sections[section].id;
					const activeLink = document.querySelector(
						'.obw-menu-item.is-active'
					);
					if (activeLink) {
						activeLink.classList.remove('is-active');
					}
					document
						.querySelector(`.obw-menu-link[href*=${id}]`)
						.parentNode.classList.add('is-active');
				}
		};
	}
}
