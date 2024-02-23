class CardVideos extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel = "stylesheet" href = "./src/components/cardVideos/cardVideos.css">
    <section>
    <h2>Los Mejores Trailers</h2>
    <div>
    <single-card-video
    name = "Star Wars Outlaws: Trailer de premiere mundial"
    video = "https://www.youtube.com/embed/P42AoJ_DtTc"
    >
    </single-card-video>
    <single-card-video
    name = "Prince of Persia: The Lost Crown - Tráiler revelación de Gameplay"
    video = "https://www.youtube.com/embed/z9rqDusVU2A"
    >
    </single-card-video>
    <single-card-video
    name = "The Division Resurgence: Tráiler CGI de acción táctica"
    video = "https://www.youtube.com/embed/kPvSieJN4Pk"
    >
    </single-card-video>
    </div>
    </section>
    `;
	}
}

customElements.define('card-videos', CardVideos);
export default CardVideos;
