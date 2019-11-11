import ChapterHeadingComponent from '../chapter-heading.component';
describe('ChapterHeadingComponent View', function() {
beforeEach(() => {
	this.chapterheading = new ChapterHeadingComponent();
});

it('Should run a few assertions', () => {
	expect(this.chapterheading).to.exist;
});
});