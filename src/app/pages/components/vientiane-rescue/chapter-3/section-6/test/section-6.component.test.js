import Section6Component from '../section-6.component';
describe('Section6Component View', function() {
beforeEach(() => {
	this.section6 = new Section6Component();
});

it('Should run a few assertions', () => {
	expect(this.section6).to.exist;
});
});