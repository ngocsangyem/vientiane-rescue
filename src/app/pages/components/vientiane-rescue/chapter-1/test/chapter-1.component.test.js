import Chapter1Component from '../chapter-1.component';
describe('Chapter1Component View', function() {
beforeEach(() => {
	this.chapter1 = new Chapter1Component();
});

it('Should run a few assertions', () => {
	expect(this.chapter1).to.exist;
});
});