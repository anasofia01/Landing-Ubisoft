import * as components from './components/index.js';

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
    <landing-banner title = "PROTEGE PANDORA. CONVIÉRTETE EN NA'VI."
    img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6B49sRNBG3UNrxVHuPMtqc/3b9cab25b0f3813b0d59654562a34dfe/ubi-homescreen-afop-keyart-v1.jpg"
    description = "Vuelve a conectar con tu herencia perdida, descubre qué significa realmente ser na'vi y únete a otros clanes para proteger Pandora."
    >
    </landing-banner>
    <card-games></card-games>
    <card-news></card-news>
    <card-store></card-store>
    <card-videos></card-videos>
    `;
	}
}

customElements.define('landing-page', LandingPage);
