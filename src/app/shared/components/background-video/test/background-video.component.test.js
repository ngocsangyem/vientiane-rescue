import BackgroundVideoComponent from '../background-video.component';
describe('BackgroundVideoComponent View', function() {
beforeEach(() => {
	this.backgroundvideo = new BackgroundVideoComponent();
});

it('Should run a few assertions', () => {
	expect(this.backgroundvideo).to.exist;
});
});