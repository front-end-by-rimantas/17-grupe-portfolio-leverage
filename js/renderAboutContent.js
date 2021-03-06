function renderAbout(selector, data) {
    const DOM = document.querySelector(selector)
    let HTML = `<div class="row col-12 about">
                    <div class="row col-12 about-structure">
                        <h2>${data.title}</h2>
                        <p>${data.description}</p>
                        <div class="block"></div>
                    </div>
                    <div class="row col-12 about-image">
                        <img src="${data.image}" data-type="gallery1" alt="about-img">
                    </div>
                </div>
                <div class="vertical-dash"></div>`;
    return DOM.innerHTML = HTML;
}
export default renderAbout;