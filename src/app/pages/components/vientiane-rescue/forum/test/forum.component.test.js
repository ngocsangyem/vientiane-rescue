import ForumComponent from '../forum.component';
describe('ForumComponent View', function() {
beforeEach(() => {
	this.forum = new ForumComponent();
});

it('Should run a few assertions', () => {
	expect(this.forum).to.exist;
});
});