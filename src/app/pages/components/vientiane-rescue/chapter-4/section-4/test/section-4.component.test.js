import Section4Component from '../section-4.component';
describe('Section4Component View', function() {
beforeEach(() => {
	this.section4 = new Section4Component();
});

it('Should run a few assertions', () => {
	expect(this.section4).to.exist;
});
});