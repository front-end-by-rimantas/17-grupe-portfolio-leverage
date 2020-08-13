
function renderFooter( selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length
    for ( let i=0; i<size; i++ ) {
        const footer = data[i];
        const title = i === 0 ? `<a class="lever">${data[i].title}</a>` : `<h2>${data[i].title}</h2>`;
        const content = data[i].content;
        let contentHTML = '';
        for(let j = 0; j < content.length; j++){
            const contClass = content[j].class ? ` class="${content[j].class}"`: '';
            const link = content.link ? ` href="${content[j].link}"`: '';
            const content2 = content[j].content;
            let contentHTML2 = '';
            for(let k = 0; k < content2.length; k++){
                contentHTML2 += `${content2[k]}`
            }
            contentHTML +=  `<${content[j].container}${contClass}${link}>
                                ${contentHTML2}
                            </${content[j].container}>`
        }
        HTML += `<div class="${data[i].class}">
                    ${title}${contentHTML}
                </div>`
    }
    return DOM.innerHTML += HTML;
}

export default renderFooter;