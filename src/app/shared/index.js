// Components
import { AudioButtonPrimaryComponent } from './components/index';

export class Shared {
	constructor() {
		new AudioButtonPrimaryComponent();
	}

	static init() {
		const shared = new Shared();
		return shared;
	}
}
