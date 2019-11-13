import CustomVideoControlsComponent from '../custom-video-controls.component';
describe('CustomVideoControlsComponent View', function() {
beforeEach(() => {
	this.customvideocontrols = new CustomVideoControlsComponent();
});

it('Should run a few assertions', () => {
	expect(this.customvideocontrols).to.exist;
});
});