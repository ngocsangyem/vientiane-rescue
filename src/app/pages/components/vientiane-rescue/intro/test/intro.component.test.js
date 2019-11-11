import IntroComponent from '../intro.component';
describe('IntroComponent View', function() {
beforeEach(() => {
	this.intro = new IntroComponent();
});

it('Should run a few assertions', () => {
	expect(this.intro).to.exist;
});
});