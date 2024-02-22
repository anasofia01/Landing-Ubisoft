class SingleCardGame extends HTMLElement {
	static get observedAttributes() {
		return ['name', 'img'];
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
    <link rel = "stylesheet" href = "./src/components/singleCardGame/singleCardGame.css">
    <figure>
    <img src = "${this.img}"></img>
    <h3>${this.name}</h3>
    </figure>
    `;
	}
}

customElements.define('single-card-game', SingleCardGame);
export default SingleCardGame;
