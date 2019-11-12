/* ES6 module */
import { nodeToArray, isInView } from '../../helpers/index';

export class AudioButtonPrimaryComponent {
	timer;
	constructor() {
		this.audioInit();
	}

	audioInit() {
		this.clickAudio();
	}

	clickAudio() {
		const jsAudioEl = document.getElementsByClassName('js-audio');
		const jsAudioArray = nodeToArray(jsAudioEl);

		jsAudioArray.forEach(element => {
			const audio = element.querySelector('.audio');

			element.addEventListener('click', event => {
				const currentAudio = event.target.querySelector('.audio');

				if (!currentAudio.paused) {
					this.swapClass(element, 'audio-active', 'audio-pause');
					this.pauseAudio(currentAudio);
				} else {
					element.classList.remove('audio-init');
					this.swapClass(element, 'audio-pause', 'audio-active');
					pauseAllAudio();
					this.playAudio(currentAudio);
					this.trackingPlayAudio(currentAudio);
				}
			});

			audio.addEventListener('playing', event => {
				let duration = event.target.duration;
				this.audioProgress(duration, audio, element);
			});

			audio.addEventListener('pause', event => {
				clearTimeout(this.timer);
				this.swapClass(element, 'audio-active', 'audio-pause');
			});

			audio.addEventListener('ended', () => {
				this.swapClass(element, 'audio-pause', 'audio-init');
			});

			this.getDuration(audio.src, element);

			window.addEventListener('scroll', () => {
				if (!isInView(element) && !audio.paused) {
					this.pauseAudio(audio);
				}
			});
		});

		function pauseAllAudio() {
			jsAudioArray.forEach(element => {
				element.querySelector('.audio').pause();
			});
		}
	}

	changeLogoSrc(element, newSrc, breakpoint) {
		const mediaScreen = window.matchMedia('(' + breakpoint + ')').matches;
		if (!!element) {
			if (mediaScreen) {
				element.setAttribute('src', newSrc);
			} else {
				element.setAttribute('src', currentLogo);
			}
		}
	}

	setAttibuteEl(element, className, attributeName, attributeValue) {
		const childEl = element.querySelector(className);
		if (!!childEl) {
			childEl.setAttribute(attributeName, attributeValue);
		}
	}

	nodeToArray(dom) {
		return Array.from(dom);
	}

	swapClass(element, oldClass, newClass) {
		element.classList.remove(oldClass);
		element.classList.add(newClass);
	}

	trackingPlayAudio(audio) {
		dataLayer.push({
			event: 'audio_listen',
			eventCategory: 'Audio Consumption',
			contentParticipates: 1,
			eventAction: 'Audio Play',
			eventLabel: this.getAudioFileName(audio.src),
			timestamp: Date.now()
		});
	}

	getAudioFileName(audioSrc) {
		let audioSrcMetrics = audioSrc.split('/');
		return decodeURI(audioSrcMetrics[audioSrcMetrics.length - 1]).replace(
			/(\.[^/.]+)+$/,
			''
		);
	}

	audioProgress(duration, audio, element) {
		let progress = element.querySelector('.audio-progress');

		if (!!progress) {
			let increment = 10 / duration;
			let percent = Math.min(increment * audio.currentTime * 10, 100);
			progress.style.width = percent + '%';
			this.startTimer(duration, audio, element);
		}
	}

	startTimer(duration, audio, element) {
		const percent = 0;
		if (percent < 100) {
			this.timer = setTimeout(() => {
				this.audioProgress(duration, audio, element);
			}, 100);
		}
	}

	getDuration(src, element) {
		const audio = new Audio();
		const audioDurationDestination = element.querySelector(
			'.audio-duration'
		);

		if (!!audioDurationDestination) {
			audio.addEventListener('loadedmetadata', function() {
				const minutes = parseInt(audio.duration / 60, 10);
				const seconds = parseInt(audio.duration % 60);
				audioDurationDestination.textContent =
					seconds > 9
						? `${minutes}:${seconds}`
						: `${minutes}:0${seconds}`;
			});
			audio.src = src;
		}
	}

	playAudio(audio) {
		audio.play();
	}

	pauseAudio(audio) {
		audio.pause();
	}
}
