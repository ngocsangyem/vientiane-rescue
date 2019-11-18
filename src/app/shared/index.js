// Components
import {
	AudioButtonPrimaryComponent,
	CustomVideoControlsComponent,
	ChapterHeadingComponent
} from './components/index';

export class Shared {
	constructor() {
		new AudioButtonPrimaryComponent();
		new CustomVideoControlsComponent();
		new ChapterHeadingComponent();
	}

	static init() {
		const shared = new Shared();
		return shared;
	}
}
