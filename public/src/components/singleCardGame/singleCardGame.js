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
		<img class = "icons" src = "https://cdn.icon-icons.com/icons2/510/PNG/512/xbox_icon-icons.com_49952.png">
		<img class = "icons" src = "https://cdn-icons-png.flaticon.com/512/1/1443.png">
		<img class = "icons" src = "https://cdn-icons-png.flaticon.com/512/71/71753.png">
    </figure>
    `;
	}
}

customElements.define('single-card-game', SingleCardGame);
export default SingleCardGame;
