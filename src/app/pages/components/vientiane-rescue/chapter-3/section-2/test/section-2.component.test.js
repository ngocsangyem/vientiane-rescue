import Section2Component from '../section-2.component';
describe('Section2Component View', function() {
beforeEach(() => {
	this.section2 = new Section2Component();
});

it('Should run a few assertions', () => {
	expect(this.section2).to.exist;
});
});