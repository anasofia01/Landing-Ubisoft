class Banner extends HTMLElement {
	static get observedAttributes() {
		return ['title', 'img', 'description'];
	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel = "stylesheet" href = "./src/components/banner/banner.css">
    <header>
    <img src = "${this.img}"></img>
    <div>
    <h1>${this.title}</h1>
    <p>${this.description}</p>
    </div>
    </header>
    `;
	}
}

customElements.define('landing-banner', Banner);
export default Banner;
