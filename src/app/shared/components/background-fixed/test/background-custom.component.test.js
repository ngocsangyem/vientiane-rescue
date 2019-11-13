import BackgroundCustomComponent from '../background-custom.component';
describe('BackgroundCustomComponent View', function() {
beforeEach(() => {
	this.backgroundcustom = new BackgroundCustomComponent();
});

it('Should run a few assertions', () => {
	expect(this.backgroundcustom).to.exist;
});
});