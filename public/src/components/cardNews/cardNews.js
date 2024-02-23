class CardNews extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel = "stylesheet" href = "./src/components/CardNews/cardNews.css">
    <section>
    <h2>Últimas Noticias</h2>
    <div>
    <single-card-news
     title = "Assassin’s Creed Odyssey and Origins Featured at Museum of Cycladic Art of Athens"
     img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/pFOu5MnPGYJTkhBERsoT5/792fc5b1ac8e39971e3f13754e44a6a6/STATHATOU_HORIZONTAL_V6_-_vdef.jpg"
     date = "Febrero 19, 2024">
    </single-card-news>
    <single-card-news
     title = "Assassin’s Creed Odyssey and Origins Featured at Museum of Cycladic Art of Athens"
     img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5rRwRpR4iwKOphQvUEhJ8z/430dd25e8bfc31978ac23f2173098ae6/ACNexus_MRDominikaWallpaper_Comeback_960x540.jpg"
     date = "Febrero 19, 2024">
    </single-card-news>
    <single-card-news
     title = "Assassin’s Creed Odyssey and Origins Featured at Museum of Cycladic Art of Athens"
     img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2fcvbfBkwtDsCejaobFYG3/372969d1fe749f8d96693e0c03979041/ForHonor_Treason.jpg"
     date = "Febrero 19, 2024">
    </single-card-news>
    <single-card-news
     title = "Assassin’s Creed Odyssey and Origins Featured at Museum of Cycladic Art of Athens"
     img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/pFOu5MnPGYJTkhBERsoT5/792fc5b1ac8e39971e3f13754e44a6a6/STATHATOU_HORIZONTAL_V6_-_vdef.jpg"
     date = "Febrero 19, 2024">
    </single-card-news>
    <single-card-news
     title = "Assassin’s Creed Odyssey and Origins Featured at Museum of Cycladic Art of Athens"
     img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5rRwRpR4iwKOphQvUEhJ8z/430dd25e8bfc31978ac23f2173098ae6/ACNexus_MRDominikaWallpaper_Comeback_960x540.jpg"
     date = "Febrero 19, 2024">
    </single-card-news>
    <single-card-news
     title = "Assassin’s Creed Odyssey and Origins Featured at Museum of Cycladic Art of Athens"
     img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2fcvbfBkwtDsCejaobFYG3/372969d1fe749f8d96693e0c03979041/ForHonor_Treason.jpg"
     date = "Febrero 19, 2024">
    </single-card-news>
    </div>
    </section>
    `;
	}
}

customElements.define('card-news', CardNews);
export default CardNews;
