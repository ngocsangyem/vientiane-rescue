import Section112Component from '../section-112.component';
describe('Section112Component View', function() {
beforeEach(() => {
	this.section112 = new Section112Component();
});

it('Should run a few assertions', () => {
	expect(this.section112).to.exist;
});
});