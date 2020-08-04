
function renderServices (selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;

    for ( let i=0; i<size; i++ ) {
        const services = data[i];
        HTML += `<div class="main-info">
                    <i class="logo ${services.icon}" aria-hidden="true"></i>
                    <h3>${services.title}</h3>
                    <p>${services.description}</p>
                    <i class="arrow ${services.arrow}" aria-hidden="true"></i>
                </div>`
    }
    return DOM.innerHTML += HTML;
}

export { renderServices };

