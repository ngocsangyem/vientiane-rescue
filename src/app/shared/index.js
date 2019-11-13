// Components
import {
	AudioButtonPrimaryComponent,
	CustomVideoControlsComponent
} from "./components/index";

export class Shared {
	constructor() {
		new AudioButtonPrimaryComponent();
		new CustomVideoControlsComponent();
	}

	static init() {
		const shared = new Shared();
		return shared;
	}
}
