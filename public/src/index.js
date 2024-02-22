import * as components from './components/index.js';

//<card-news></card-news>
//<card-store></card-store>
//<card-videos></card-videos>
//

class LandingPage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <card-games></card-games>
    `;
	}
}

customElements.define('landing-page', LandingPage);
