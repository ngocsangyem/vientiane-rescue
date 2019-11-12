import AudioImageComponent from '../audio-image.component';
describe('AudioImageComponent View', function() {
beforeEach(() => {
	this.audioimage = new AudioImageComponent();
});

it('Should run a few assertions', () => {
	expect(this.audioimage).to.exist;
});
});