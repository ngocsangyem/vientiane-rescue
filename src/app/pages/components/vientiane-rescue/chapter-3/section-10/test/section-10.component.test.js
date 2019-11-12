import Section10Component from '../section-10.component';
describe('Section10Component View', function() {
beforeEach(() => {
	this.section10 = new Section10Component();
});

it('Should run a few assertions', () => {
	expect(this.section10).to.exist;
});
});