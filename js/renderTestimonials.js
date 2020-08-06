
function renderTestimonials(data, selector) {
    renderTestimonialsStructure(data, selector);
    renderCards(data);
}

function renderTestimonialsStructure(data, selector) {
    const DOM = document.querySelector(selector);
    const winWidth = window.innerWidth;
    let cardsShown = 1;
    if (winWidth < 768) cardsShown = 1;
    else if (winWidth < 1023) cardsShown = 2;
    else cardsShown = 3;
    let navbar = '';
    for (let i = 0; i < data.length -cardsShown + 1; i++){
        navbar += `<div class="nav-line line${i}${i===0 ? ' active' : ''}"></div>`;
    }
    let HTML = `<div class="row">
                    <div class="intro col-12">
                        <h2>customer testimonials</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam lacus, dapibus sed imperdiet.</p>
                    </div>
                </div>
                <div class="testimonials">
                    <div class="overflow-holder" style="transform: translate(0px);"></div>
                    <div class="navbar">${navbar}</div>
                </div>`;
    return DOM.innerHTML = HTML;
}

//function to render cards
function renderCards(data){
    const DOM = document.querySelector('#testimonials .overflow-holder');
    const size = data.length;
    let HTML = '';
    const width = getCardWidth();
    for (let i = 0; i < size; i++ ) {
        let rate = '';
        for (let j = 0; j < data[i].rating; j++) {
            rate += '<i class="fa fa-star-o" aria-hidden="true"></i>';
        }
        HTML += `<div class="testimonial" style="width: ${width}px;">
                            <div class="card">
                                <div class="person"><img src="./img/${data[i].picture}.jpg" alt="persons picture"></div>
                                <h4>${data[i].name}</h4>
                                <p>${data[i].content}</p>
                                <div class="rating">${rate}</div>
                            </div>
                        </div>`;
    }
    return DOM.innerHTML = HTML;
}

function testimonialsEvents(){
    // testimonials event listener to resize cards and change navbar size
    const cards = document.querySelectorAll('#testimonials .testimonial');
    const bars = document.querySelectorAll('#testimonials .nav-line');
    window.addEventListener('resize', ()=> resizeCard(cards, bars));

    // testimonials event to scroll cards with buttons
    const navbar = document.querySelectorAll('#testimonials .nav-line');
    for (const navLine of navbar) {
        const number = parseInt((navLine.classList)[1].match(/[0-9]/g));
        navLine.addEventListener('click', () => scrollTestimonials(navLine, number))
    }
}


//function to resize card when changing screen size
function resizeCard(cards, bars) {
    const width = getCardWidth();
    for(const card of cards) {
        card.style.width = `${width}px`;
    }

    return;
}

//function to get width
function getCardWidth(){
    const widthHolder = document.querySelector('#testimonials .testimonials');
    const holderWidth = widthHolder.offsetWidth;
    const winWidth = window.innerWidth;
    let width = 0;
    if (winWidth < 768) width = holderWidth;
    else if (winWidth < 1023) width = holderWidth/2;
    else  width = (Math.floor(holderWidth/3));
    return width;
}


// function for event listener 'click'
function scrollTestimonials(DOM, number) {
    const beforeDOM = DOM.closest('.navbar').querySelector('.active');
    const beforeNumber = parseInt((beforeDOM.classList)[1].match(/[0-9]/g));
    const difference = beforeNumber - number;
    const cardWidth = getCardWidth();
    const overflowHolder = document.querySelector('#testimonials .overflow-holder')
    if (number === beforeNumber) return;
    console.log('before',beforeDOM, beforeNumber,'after', DOM, number);
    console.log('click');
    beforeDOM.classList.remove('active');
    overflowHolder.style.transform = `translate(-${cardWidth*number}px)`;
    DOM.classList.add('active');
}

export {renderTestimonials, testimonialsEvents};