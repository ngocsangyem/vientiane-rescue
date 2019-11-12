import ImageComponent from '../image.component';
describe('ImageComponent View', function() {
beforeEach(() => {
	this.image = new ImageComponent();
});

it('Should run a few assertions', () => {
	expect(this.image).to.exist;
});
});