import Section8Component from '../section-8.component';
describe('Section8Component View', function() {
beforeEach(() => {
	this.section8 = new Section8Component();
});

it('Should run a few assertions', () => {
	expect(this.section8).to.exist;
});
});