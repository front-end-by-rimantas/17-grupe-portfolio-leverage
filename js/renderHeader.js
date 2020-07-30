function renderHeader(data, selector) {
    const DOM = document.querySelector(selector),
        logo = data.logoTab,
        links = data.linksTab;
    let HTML = `<div class="header-line col-12">
                    <div class="${logo.class}">
                        ${logo.content}
                    </div>
                    <div class="links">
                        ${renderButton(links.button)}
                        ${renderMenuButton(links.menuButton)}
                        ${renderIcons(links.icons)}
                        ${renderNavtab(links.navtab)}
                    </div>
                </div>`;
    return DOM.innerHTML = HTML;
}


function renderButton(data){
    return `<div class="${data.class}">
                ${data.content}
            </div>`;
}


function renderMenuButton(data){
    return `<div class="${data.class}">
                ${data.content}
            </div>`;
}


function renderIcons(data){
    const icons = data.icons,
            size = icons.length;
    let HTML = '';
    for (let i = 0; i < size; i++) {
        HTML += `<a href="#" class="fa fa-${icons[i]}" aria-hidden="true"></a>`
    }
    return `<div class="${data.class}">
                ${HTML}
            </div>`;
}


function renderNavtab(data){
    const navtab = data.content,
        size = navtab.length;
    let HTML = '';

    for (let i = 0; i < size; i++) {
        const level1 = navtab[i];
        let downArrow = (level1.dropDown) ? `<i class="fa fa-angle-down" aria-hidden="true"></i>` : '',
            classExtra = (level1.dropDown) ? ' drop-down' : '';
        let HTML1 = '';
        if (level1.dropDown) {
            const dropMenu1 = level1.dropDown,
                size1 = dropMenu1.length;
            let tempHTML1 = '';
            for (let j = 0; j < size1; j++) {
                const level2 = dropMenu1[j];
                let rightArrow = (level2.dropDown) ? `<i class="fa fa-angle-right" aria-hidden="true"></i>` : '';
                let HTML2 = '';
                if (level2.dropDown) {
                    const dropMenu2 = level2.dropDown,
                        size2 = dropMenu2.length
                    let tempHTML2 = '';
                    for (let k = 0; k < size2; k++) {
                        const level3 = dropMenu2[k];
                        tempHTML2 += `<div class="down-cont">
                                        <a href="#" class="drop-link2">
                                            ${level3.content}
                                        </a>
                                    </div>`
                    }
                    HTML2 = `<div class="drop-menu2">
                                ${tempHTML2}
                            </div>`
                }
                tempHTML1 += `<div class="drop-element">
                                <div class="down-cont">
                                    <a href="#" class="drop-link1">${level2.content}${rightArrow}</a>
                                    ${HTML2}
                                </div>
                            </div>`
            }
            HTML1 = `<div class="drop-menu1">
                        ${tempHTML1}
                    </div>`
        }
        HTML += `<div class="menu-element${classExtra}">
                        <a href="#" class="menu-link">${level1.content}${downArrow}</a>
                        ${HTML1}
                    </div>`;
    }

    




    return `<div class="${data.class}">
                ${HTML}
            </div>`;
}

export {renderHeader};

{/* <div class="header-line col-12">
                <div class="logo">
                    <div class="name">Leverage<span class="dot">.</span></div>
                    
                </div>
                <div class="links">
                    <div class="button header-button go-right">
                        <span href="#" class="fa fa-rocket icon" aria-hidden="true"></span>
                        <span class="hidden">buy now</span>
                    </div>
                    
                    <div class="menu-button go-right">
                        <div class="menu-line line1"></div>
                        <div class="menu-line line2"></div>
                        <div class="menu-line line3"></div>
                    </div>
                    <div class="icons go-right">
                        <a href="#" class="fa fa-search" aria-hidden="true"></a>
                        <a href="#" class="fa fa-twitter hidden" aria-hidden="true"></a>
                        <a href="#" class="fa fa-instagram hidden" aria-hidden="true"></a>
                        
                    </div>
                    <div class="navtab go-right">
                        <div class="menu-element drop-down">
                            <a href="#" class="menu-link">
                                home 
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <div class="drop-menu1">
                                <div class="drop-element">
                                    <div class="down-cont">
                                        <a href="#" class="drop-link1">multi-page
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div class="drop-menu2">
                                        <div class="down-cont"><a href="#" class="drop-link2">labas</a></div>
                                        <div class="down-cont"><a href="#" class="drop-link2">rytas</a></div>
                                        <div class="down-cont"><a href="#" class="drop-link2">grazi</a></div>
                                        <div class="down-cont"><a href="#" class="drop-link2">partizanu musis</a></div>
                                    </div>
                                </div>
                                <div class="drop-element">
                                    <div class="down-cont"><a href="#" class="drop-link1">one-page
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    </a></div>
                                    <div class="drop-menu2">
                                        <div class="down-cont"><a class="drop-link2">labas</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-element">
                            <a href="#" class="menu-link">about</a>
                            
                        </div>
                        <div class="menu-element">
                            <a href="#" class="menu-link">services</a>
                        </div>
                        <div class="menu-element drop-down">
                            <a href="#" class="menu-link">inner pages
                                <i class="fa fa-angle-down" aria-hidden="true"></i>

                            </a>
                            <div class="drop-menu1">
                                <div class="drop-element">
                                    <div class="down-cont">
                                        <a href="#" class="drop-link1">about us</a>
                                    </div>
                                </div>
                                <div class="drop-element">
                                    <div class="down-cont">
                                        <a href="#" class="drop-link1">about us</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="menu-element  drop-down">
                            <a href="#" class="menu-link">blog
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                            </a> 
                            <div class="drop-menu1">
                                <div class="drop-element">
                                    <div class="down-cont">
                                        <a href="#" class="drop-link1">periodic table</a>
                                    </div>
                                </div>
                                <div class="drop-element">
                                    <div class="down-cont">
                                        <a href="#" class="drop-link1">blog</a>
                                    </div>
                                </div>
                                <div class="drop-element">
                                    <div class="down-cont">
                                        <a href="#" class="drop-link1">blog</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}