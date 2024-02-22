class CardGames extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel = "stylesheet" href = "./src/components/cardGames/cardGames.css">
    <section>
    <h1>Explorar Más Juegos</h1>
    <div>
    <single-card-game name = "Assassin's Creed" img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360"></single-card-game>
    <single-card-game name = "Principe de Persia" img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Ldpa61RRMW3ER8Ilvx5s8/a00d931cad43765aedb457304d399650/MEMO_Packshot.jpg?imwidth=360"></single-card-game>
    <single-card-game name = "Avatar" img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3a1Eo3mixiKRP69sewbisM/19c27f9470353122ee7c4592a56c9e05/avatar-frontiers-of-pandora-boxshot.jpg?imwidth=360"></single-card-game>
    <single-card-game name = "Assassin's Creed" img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360"></single-card-game>
    <single-card-game name = "Principe de Persia" img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Ldpa61RRMW3ER8Ilvx5s8/a00d931cad43765aedb457304d399650/MEMO_Packshot.jpg?imwidth=360"></single-card-game>
    <single-card-game name = "Avatar" img = "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3a1Eo3mixiKRP69sewbisM/19c27f9470353122ee7c4592a56c9e05/avatar-frontiers-of-pandora-boxshot.jpg?imwidth=360"></single-card-game>
    </div>
    </section>
    `;
	}
}

customElements.define('card-games', CardGames);
export default CardGames;
