import Chapter4Component from '../chapter-4.component';
describe('Chapter4Component View', function() {
beforeEach(() => {
	this.chapter4 = new Chapter4Component();
});

it('Should run a few assertions', () => {
	expect(this.chapter4).to.exist;
});
});