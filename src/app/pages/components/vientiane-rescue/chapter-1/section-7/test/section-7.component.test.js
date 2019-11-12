import Section7Component from '../section-7.component';
describe('Section7Component View', function() {
beforeEach(() => {
	this.section7 = new Section7Component();
});

it('Should run a few assertions', () => {
	expect(this.section7).to.exist;
});
});