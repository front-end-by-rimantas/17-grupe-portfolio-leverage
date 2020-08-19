function renderAboutRow(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="block-segment">
                    <div class="icon">
                        <i class="${data[i].icon}" aria-hidden="true"></i>
                    </div>
                    <div class="content">
                        <div class="content-title">
                            ${data[i].title}
                        </div>
                        <div class="content-description">
                            ${data[i].description}
                        </div>
                    </div>
                </div>`
    }
    return DOM.innerHTML = HTML;
}
export default renderAboutRow;