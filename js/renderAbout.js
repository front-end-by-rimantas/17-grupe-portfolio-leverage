import renderAboutRow from './renderAboutRow.js';

function renderAbout(selector, data) {
    const DOM = document.querySelector(selector)
    let HTML = `<div class="row col-12 about">
                    <div class="row col-12 about-structure">
                        <h2>${data.aboutTitle[0].title}</h2>
                        <p>${data.aboutTitle[0].description}</p>

                        <div class="block">
                            ${renderAboutRow('.about-structure > .block', data.aboutData)}
                        </div>
                    </div>
                    <div class="row col-12 about-image">
                        <a href="${data.aboutTitle[0].image}">
                            <img src="${data.aboutTitle[0].image}" alt="about-img">
                        </a>
                    </div>
                </div>
                <div class="vertical-dash"></div>`;

    return DOM.innerHTML = HTML;
}
export default renderAbout;