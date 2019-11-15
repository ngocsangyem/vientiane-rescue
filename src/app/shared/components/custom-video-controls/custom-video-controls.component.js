/* ES6 module */

export class CustomVideoControlsComponent {
	constructor() {
		this.CustomVideoControlsInit();
	}

	CustomVideoControlsInit() {
		this.customPlyr();
	}

	customPlyr() {
		const players = Plyr.setup('.js-player');
		players.forEach(player => {
			console.log(
				player.elements.original.closest('.section-video-player')
			);

			new Plyr(player);
		});
	}
}
