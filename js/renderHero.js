function renderHero(selector, data) {
    if (selector === undefined) {
        return console.error("ERROR: Please give me selector / no selector was given!");
    }
    if(typeof selector !== "string")
    {
        return console.error("ERROR: Slector should be string!");
    }
    if(selector.length === 0) {
        return console.error("ERROR: I think you forgot to write selecotr/ empty selector were given");
    }
    const DOM = document.querySelector(selector);
    if(DOM === null){
        return console.error("ERROR: Please give me valid selector!");
    }
    const HTML = `
    <div class="row">
        <div class="hero-cont col-12">
            <div class="content col-6">
                <h1 class="gradient-text">${data.title}</h1>
                <p>${data.description}</p>
                <a href="#about_us${data.button.href}" class="button"><i class="${data.button.icon} hero-icon" aria-hidden="true"></i>${data.button.text}</a>
            </div>
        </div>
    </div>
    <div class="hero-img-wrapper">
        <img src="${data.img.path}" alt="${data.img.alt}">
    </div>
    <div class="vertical-dash"></div>
    `;
    return DOM.innerHTML = HTML;
}

export default renderHero;