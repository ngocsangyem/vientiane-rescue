import Section9Component from '../section-9.component';
describe('Section9Component View', function() {
beforeEach(() => {
	this.section9 = new Section9Component();
});

it('Should run a few assertions', () => {
	expect(this.section9).to.exist;
});
});