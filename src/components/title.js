class Title extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1>Weather App</h1> <p>based on OpenWeatherAPI</p>`;
    }
}

customElements.define('app-title', Title);