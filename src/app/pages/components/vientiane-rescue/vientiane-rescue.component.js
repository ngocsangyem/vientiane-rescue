/* ES6 module */
import { nodeToArray, isInView } from '../../../shared/helpers/index';

export class VientianeRescueComponent {
	constructor() {
		this.VientianeRescueComponentInit();
	}

	changeBackgroundOnScroll() {
		const sectionsHaveAnimation = nodeToArray(
			document.querySelectorAll('.has-scroll-animation')
		);

		if (sectionsHaveAnimation && sectionsHaveAnimation.length > 0) {
			sectionsHaveAnimation.forEach(section => {
				const contents = nodeToArray(
					section.querySelectorAll('.content')
				);
				const backgroundItem = nodeToArray(
					section.querySelectorAll('.background-item')
				);
				contents.forEach((content, index) => {
					let num = index + 1;

					window.addEventListener('scroll', function() {
						if (isInView(content)) {
							backgroundItem.forEach(item => {
								item.classList.remove('is-active');
							});
							section
								.querySelector(`.background-item-${num}`)
								.classList.add('is-active');
						}
					});
				});
			});
		}
	}

	VientianeRescueComponentInit() {
		this.changeBackgroundOnScroll();
	}
}
