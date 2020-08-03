
function renderFeatures( selector, data ) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;

    for ( let i=0; i<size; i++ ) {
        const features = data[i];
        HTML += `<div class="image-capture ${features.size}">
                    <i class="${features.icon}" aria-hidden="true"></i>
                    <h3>${features.title}</h3>
                    <p>${features.description}</p>
                </div>`
    }

    return DOM.innerHTML = HTML;
}

export { renderFeatures };

