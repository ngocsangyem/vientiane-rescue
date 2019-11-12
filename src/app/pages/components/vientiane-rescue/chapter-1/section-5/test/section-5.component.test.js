import Section5Component from '../section-5.component';
describe('Section5Component View', function() {
beforeEach(() => {
	this.section5 = new Section5Component();
});

it('Should run a few assertions', () => {
	expect(this.section5).to.exist;
});
});