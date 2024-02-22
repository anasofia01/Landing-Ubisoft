//<card-news></card-news>
//<card-store></card-store>
//<card-videos></card-videos>
//<card-games></card-games>

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
    <p>Hola</p>
    `;
	}
}

customElements.define('landing-page', LandingPage);
