class SingleCardVideo extends HTMLElement {
	static get observedAttributes() {
		return ['name', 'video'];
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
    <link rel = "stylesheet" href = "./src/components/singleCardVideo/singleCardVideo.css">
    <figure>
    <iframe src="${this.video}" frameborder="0" allowfullscreen></iframe>
    <h3>${this.name}</h3>
    </figure>
    `;
	}
}

customElements.define('single-card-video', SingleCardVideo);
export default SingleCardVideo;
