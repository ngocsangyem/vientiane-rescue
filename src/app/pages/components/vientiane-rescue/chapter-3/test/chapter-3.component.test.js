import Chapter3Component from '../chapter-3.component';
describe('Chapter3Component View', function() {
beforeEach(() => {
	this.chapter3 = new Chapter3Component();
});

it('Should run a few assertions', () => {
	expect(this.chapter3).to.exist;
});
});