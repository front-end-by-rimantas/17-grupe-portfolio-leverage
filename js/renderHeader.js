function renderHeader(data, selector) { //main function to render header content
    const DOM = document.querySelector(selector),
        logo = data.logoTab,                        //variable  with information about header logo
        links = data.linksTab;                      //variable  with information about header links tab (see header.js)
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
    return DOM.innerHTML = HTML;    // separate functions are used to render different parts of links tab
}

// function to render "BUY NOW" button
function renderButton(data) {
    return `<div class="${data.class}">
                ${data.content}
            </div>`;
}

// function to render menu button "burger", which will be visible after navtab disappears
function renderMenuButton(data) {
    return `<div class="${data.class}">
                ${data.content}
            </div>`;
}

// function to render icons tab with search icon and social links icons
function renderIcons(data) {
    const icons = data.icons,
        size = icons.length;
    let HTML = '';
    // for cycle is used, because in header.js there is an icon list.
    for (let i = 0; i < size; i++) {
        HTML += `<a href="#" class="fa fa-${icons[i]}" aria-hidden="true"></a>`
    }
    return `<div class="${data.class}">
                ${HTML}
            </div>`;
}

/* this function is used to render navtab
    navtab has 3 lavels of rendering, since some items
    have dropdown menus inside of them */
function renderNavtab(data) {
    const navtab = data.content,    //navtab variable accesses an area in description (see header.js)
        size = navtab.length;
    let HTML = '';
    //Main HTML that will be included in return & which will return 5 items of navtab

    //main for cycle to add 5 navtab items
    for (let i = 0; i < size; i++) {
        const level1 = navtab[i];           //level1 accesses each object in  the area


        // in case there is "dropdown" parameter in the object downArrow contains down ("V") icon
        let downArrow = (level1.dropDown) ? `<i class="fa fa-angle-down" aria-hidden="true"></i>` : '',
            //in case there is "dropdown" parameter in the object classExtra adds extra class in the menu-element
            classExtra = (level1.dropDown) ? ' drop-down' : '';
        let HTML1 = '';
        // this html the will be inserted into main HTML (empty if there is no drowdown menu)

        //checks if dropdown exists in the object
        if (level1.dropDown) {
            const dropMenu1 = level1.dropDown,  // dropMenu1 accesses area of dropDown parameter
                size1 = dropMenu1.length;
            let tempHTML1 = '';                 // temporary hmtl for the following 'for' cycle

            //cycle to generate level 2 items that drop down
            for (let j = 0; j < size1; j++) {
                const level2 = dropMenu1[j];        //level2 accesses each object in the dropdown area

                // in case there is "dropdown" parameter in the object, rightArrow contains right (">") icon
                let rightArrow = (level2.dropDown) ? `<i class="fa fa-angle-right" aria-hidden="true"></i>` : '';
                let HTML2 = '';
                //this html the will be inserted into HTML1 (empty if there is no level 2 drowdown menu)

                //checks if next level drop down exists in the object
                if (level2.dropDown) {
                    const dropMenu2 = level2.dropDown, //dropMenu accesses area of level 2 dropDown parameter
                        size2 = dropMenu2.length;

                    let tempHTML2 = '';         // temporary hmtl for the following 'for' cycle

                    //cycle to generate level 3 items that drop down from level 2
                    for (let k = 0; k < size2; k++) {
                        const level3 = dropMenu2[k];    //level3 accesses each object in the dropdown area from level2 
                        //temporary html is added with level 3 drop down items
                        tempHTML2 += `<div class="down-cont">
                                        <a href="#" class="drop-link2">
                                            ${level3.content}
                                        </a>
                                    </div>`
                    }

                    // in case there was level 2 dropdown HTML2 will be returned with level 3 items
                    HTML2 = `<div class="drop-menu2">
                                ${tempHTML2}
                            </div>`
                }

                //tempHTML1 will contain all level 2 items with level 3 items (if they existed)
                tempHTML1 += `<div class="drop-element">
                                <div class="down-cont">
                                    <a href="#" class="drop-link1">${level2.content}${rightArrow}</a>
                                    ${HTML2}
                                </div>
                            </div>`
            }

            // in case there was level 1 dropdown HTML1 will be returned with level 2 items
            HTML1 = `<div class="drop-menu1">
                        ${tempHTML1}
                    </div>`
        }

        //this main html will contain all navtab items with their drop down items of level 2 & 3 if they exist
        //this htlm is included in return html and will never be empty
        HTML += `<div class="menu-element${classExtra}">
                        <a href="#" class="menu-link">${level1.content}${downArrow}</a>
                        ${HTML1}
                    </div>`;
    }






    return `<div class="${data.class}">
                ${HTML}
            </div>`;
}

// function for event listener that shows drop menu level 1
function dropMenuLevel1(event) {
    // const DOM = document.querySelector('#main_header .drop-down');
    const DOM = event.target;   // event.target is selector that has event listener
    DOM.classList.add('active');     //
    if (DOM.querySelector('.drop-menu2')) {

        const hoverDOM = DOM.querySelectorAll('.drop-menu2');
        for (let i = 0; i < hoverDOM.length; i++) {
            hoverDOM[i].closest('.drop-element').addEventListener('mouseenter', dropMenuLevel2);
        }
    }
    DOM.addEventListener('mouseleave', dropMenuLeave);
    return;
}
// function for evemt listener that works when level 1 menu
function dropMenuLeave(event) {
    event.target.classList.remove('active');
    return;
}
function dropMenuLevel2(event) {
    event.target.classList.add('active');
    event.target.addEventListener('mouseleave', dropMenuLeave);
    return;
}
// function that acts on windows scroll
function windowScrolling(startPosition) {
    let position = window.scrollY;
    // console.log('start',startPosition, 'now', position);
    const DOM = document.querySelector('#main_header');
    const hidden = document.querySelector('#main_header.hidden') ? document.querySelector('#main_header.hidden') : null;
    const sticky = document.querySelector('#main_header.sticky-line') ? document.querySelector('#main_header.sticky-line') : null;
    //scroll up
    if (position < startPosition) {
        //jei uz hero ir pasleptas
        if (position > window.innerHeight && hidden) {
            DOM.classList.remove('hidden');
        }
        //jei grizta i pradzia
        else if (position < 50) {
            DOM.classList.remove('sticky-line');
        }
    }
    //scroll down
    else {
        // console.log('go down');
        //jei uz hero ir matomas
        if (position > window.innerHeight && !hidden) {
            DOM.classList.add('hidden');
        }
        //jei pajuda is vietos
        else if (position > 0 && !sticky) {
            DOM.classList.add('sticky-line');
        }

    }

}

export { renderHeader, dropMenuLevel1, windowScrolling };

