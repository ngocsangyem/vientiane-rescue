import Section3Component from '../section-3.component';
describe('Section3Component View', function() {
beforeEach(() => {
	this.section3 = new Section3Component();
});

it('Should run a few assertions', () => {
	expect(this.section3).to.exist;
});
});