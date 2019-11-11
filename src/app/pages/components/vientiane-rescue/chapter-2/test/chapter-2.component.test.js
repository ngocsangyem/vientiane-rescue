import Chapter2Component from '../chapter-2.component';
describe('Chapter2Component View', function() {
beforeEach(() => {
	this.chapter2 = new Chapter2Component();
});

it('Should run a few assertions', () => {
	expect(this.chapter2).to.exist;
});
});