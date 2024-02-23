class SingleCardStore extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'text'];
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
    <link rel = "stylesheet" href = "./src/components/singleCardStore/singleCardStore.css">
    <figure>
    <img src = "${this.img}"></img>
    <div>
    <h3>${this.text}</h3>
    </div>
    </figure>
    `;
	}
}

customElements.define('single-card-store', SingleCardStore);
export default SingleCardStore;
