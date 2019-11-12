import Section1Component from '../section-1.component';
describe('Section1Component View', function() {
beforeEach(() => {
	this.section1 = new Section1Component();
});

it('Should run a few assertions', () => {
	expect(this.section1).to.exist;
});
});