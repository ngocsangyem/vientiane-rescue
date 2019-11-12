import Section11Component from '../section-11.component';
describe('Section11Component View', function() {
beforeEach(() => {
	this.section11 = new Section11Component();
});

it('Should run a few assertions', () => {
	expect(this.section11).to.exist;
});
});