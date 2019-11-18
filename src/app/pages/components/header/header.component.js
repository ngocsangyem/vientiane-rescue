/* ES6 module */
import { nodeToArray } from '../../../shared/helpers/index';
import { HeaderMenuButtonComponent } from './header-menu-button/header-menu-button.component';

export class HeaderComponent {
	constructor() {
		this.HeaderInit();
	}

	HeaderInit() {
		new HeaderMenuButtonComponent();
		this.scrollSpy();
		this.smoothMenuLink();
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
		const headerHeight = headerOBW.offsetHeight;
		for (let nav in menuLinks) {
			if (menuLinks.hasOwnProperty(nav)) {
				console.log(menuLinks[nav].hash);
				menuLinks[nav].addEventListener('click', e => {
					e.preventDefault();
					headerOBW.classList.remove('is-open');
					document.querySelector(menuLinks[nav].hash).scrollIntoView({
						behavior: 'smooth'
					});
					let topOfElement =
						document.querySelector(menuLinks[nav].hash).offsetTop -
						headerHeight;
					window.scroll({
						top: topOfElement,
						behavior: 'smooth'
					});
				});
			}
		}
	}

	scrollTo(element, to, duration) {
		if (duration <= 0) return;
		var difference = to - element.scrollTop;
		var perTick = (difference / duration) * 10;

		setTimeout(function() {
			element.scrollTop = element.scrollTop + perTick;
			if (element.scrollTop === to) return;
			scrollTo(element, to, duration - 10);
		}, 10);
	}

	scrollSpy() {
		const sections = document.querySelectorAll('.chapter-container');
		const headerOBW = document.querySelector('.obw-header');
		const headerHeight = headerOBW.offsetHeight;
		window.onscroll = () => {
			const scrollPos =
				document.documentElement.scrollTop || document.body.scrollTop;

			for (let section in sections)
				if (
					sections.hasOwnProperty(section) &&
					sections[section].offsetTop - headerHeight <= scrollPos
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
