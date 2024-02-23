class CardStore extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel = "stylesheet" href = "./src/components/cardStore/cardStore.css">
    <section>
    <h2>Ubisoft Store</h2>
    <div>
    <single-card-store
    text = "PRINCE OF PERSIA: THE LOST CROWN. ¡YA DISPONIBLE!"
    img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1Ay6Utnc3GpsA7rLPSMO0G/f09575bc3067f2adbb0f344151439bbf/ubi-homescreen-store_promo-pop_lost_crown-pre-order.jpg"
    >
    </single-card-store>
    <single-card-store
    text = "PROTEGE PANDORA. SÉ UN NA'VI. COMPRA YA O JUEGA CON UBISOFT+"
    img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pC1KwNoo57no7nhlnMBnD/33804eab067899707440a4945f918b98/ubi-homescreen-store_promo-avatar-buynow.jpg"
    >
    </single-card-store>
    <single-card-store
    text = "¡ES HORA DE IZAR VELAS! SKULL AND BONES YA DISPONIBLE."
    img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Mo4OgVplq1NJGhI68t7PW/6a0bc3b8db75f018b99474a7b2806a97/ubi-homescreen-store_promo-skull_and_bones-pre-order.jpg"
    >
    </single-card-store>
    </div>
    </section>
    `;
	}
}

customElements.define('card-store', CardStore);
export default CardStore;
