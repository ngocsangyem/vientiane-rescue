// Components
import { HeaderComponent, VientianeRescueComponent } from './components/index';

// Views

export class Pages {
	constructor() {
		new HeaderComponent();
		new VientianeRescueComponent();
	}

	static init() {
		const pages = new Pages();
		return pages;
	}
}
