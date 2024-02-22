class SingleCardNews extends HTMLElement {
	static get observedAttributes() {
		return ['title', 'img', 'date'];
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
    <link rel = "stylesheet" href = "./src/components/singleCardNews/singleCardNews.css">
    <figure>
    <img src = "${this.img}"></img>
    <div>
    <span>${this.date}</span>
    <h3>${this.title}</h3>
    </div>
    </figure>
    `;
	}
}

customElements.define('single-card-news', SingleCardNews);
export default SingleCardNews;
