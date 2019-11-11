import HeaderMenuButtonComponent from '../header-menu-button.component';
describe('HeaderMenuButtonComponent View', function() {
beforeEach(() => {
	this.headermenubutton = new HeaderMenuButtonComponent();
});

it('Should run a few assertions', () => {
	expect(this.headermenubutton).to.exist;
});
});