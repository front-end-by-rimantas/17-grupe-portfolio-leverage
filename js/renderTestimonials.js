import { testimonials } from '../data/testimonials.js';

function renderTestimonials(data, selector) {
    renderTestimonialsStructure(data, selector);
    const overflowHolder =  document.querySelector('#testimonials .overflow-holder')
    renderCards(data, overflowHolder);
    const width = getCardWidth();
    overflowHolder.style.transform = `translate(-${width}px)`;
    overflowHolder.dataset.move = width;
}
/*  renderTestimonials function was split into two because renderCards
    has to find element that is created in renderTestimonialsStructure
    and calculate card width from its parent element */


function renderTestimonialsStructure(data, selector) {
    const DOM = document.querySelector(selector);
    const winWidth = window.innerWidth;
    let cardsShown = 1;
    if (winWidth < 768) cardsShown = 1;
    else if (winWidth < 1023) cardsShown = 2;
    else cardsShown = 3;
    let navbar = '';
    for (let i = 0; i < data.length; i++){
        navbar += `<div class="nav-line line${i}${i===0 ? ' active' : ''}"></div>`;
    }
    let HTML = `<div class="row">
                    <div class="intro col-12">
                        <h2>customer testimonials</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam lacus, dapibus sed imperdiet.</p>
                    </div>
                </div>
                <div class="testimonials">
                    <div class="overflow-holder" data-move="0" style="transform: translate(0px);"></div>
                    <div class="navbar">${navbar}</div>
                </div>`;
    return DOM.innerHTML = HTML;
}

//function to render cards
function renderCards(data, DOM){
    const size = data.length;
    let HTML = '';
    const width = getCardWidth();
    const howMuch = size < 4 ? 4 : size;
    /*  since max cards shown are 3, we make sure, 
        there's at least 1 card on the right hidden
        with howMuch */
    for (let i = -1; i < howMuch+2; i++ ) {
        let iteration = i;
        if (i < 0) {iteration = size+i;}
        else if (i >= size) {iteration = i - size}
        // const iteration = i < 0 ? size-i-1 : (i>=size ? i-size : i);
        HTML += renderSingleCard(data[iteration], width);
    }
    return DOM.innerHTML = HTML;
}
function renderSingleCard(data, width){
    // console.log(data);
    let rate = '';
    for (let i = 0; i < data.rating; i++) {
        rate += '<i class="fa fa-star-o" aria-hidden="true"></i>';
    }
    return `<div class="testimonial" data-index="${data.index}" style="width: ${width}px;">
                            <div class="card">
                                <div class="person" style="background-image: url(./img/${data.picture}.jpg)"></div>
                                <h4>${data.name}</h4>
                                <p>${data.content}</p>
                                <div class="rating">${rate}</div>
                            </div>
                        </div>`
}


//empty functions for later use in event listeners mouseMove and mouseUp
let moveMouse = () => {};
let releaseMouse = () => {};
function testimonialsEvents(){
    // testimonials event listener to resize cards on window resize
    //cards return array of all testimonials cards
    const cards = document.querySelectorAll('#testimonials .testimonial');
    //overflowHolder is flex that contains all testimonials
    const overflowHolder = document.querySelector('#testimonials .overflow-holder');
    //cardsCount is variable which knows how many cards are hidden on the left side
    //on loading it is one card
    let cardsCount = 1;

    //testimonials event to resize cards when window is resized
    window.addEventListener('resize', ()=> {resizeCard(cards, cardsCount);});

    // testimonials event to scroll cards with buttons
    const navbar = document.querySelectorAll('#testimonials .nav-line');
    
    for (const navLine of navbar) {
        /* with following we find the number of bar clicked
            every bar has class with a "serial" number  */
        const number = parseInt((navLine.classList)[1].match(/[0-9]/g));
        navLine.addEventListener('click', () => {
            /* for smooth scroll transition duration is activated 
               setTimeout returns transition duration to default value
               after the cards have smoothly shifted */
            overflowHolder.style.transitionDuration = '300ms';
            cardsCount = scrollTestimonials(navLine, number);
            setTimeout(() => {overflowHolder.style.transitionDuration = '0ms';},400)
        });
    }
    
    //testimonials event that will move cards on drag
    let startX = overflowHolder.dataset.move;
    overflowHolder.addEventListener('mousedown',  ()=>{
        window.addEventListener('mousemove', moveMouse = () => {
            startX = mouseMoving(event, overflowHolder, startX);
        });
        console.log('width:',overflowHolder.offsetWidth);
        window.addEventListener('mouseup',releaseMouse = () => {
            startX = mouseReleased(overflowHolder);
        });
    })
}

function mouseMoving(event, overflowHolder, startX){
    const x = event.movementX;
    const cards = overflowHolder.querySelectorAll('.testimonial');
    const cardWidth = getCardWidth()
    let position = parseFloat(overflowHolder.dataset.move) - x;
    //in case scroll reaches last card, function needs to add more and at the sime time,
    //remove from other side
    const winWidth = window.innerWidth;
    let cardsShown = 1;
    if (winWidth < 768) cardsShown = 1;
    else if (winWidth < 1023) cardsShown = 2;
    else cardsShown = 3;
    //reaching start of overflowHolder
    if (position < cardWidth){
        const index = parseInt(cards[0].dataset.index);
        const HTML = renderSingleCard(testimonials[index === 0 ? testimonials.length-1 : index-1], cardWidth);
        overflowHolder.insertAdjacentHTML('afterbegin', HTML);
        cards[cards.length-1].remove();
        overflowHolder.style.transform = `translate(-${position+cardWidth}px)`;
        overflowHolder.dataset.move = position+cardWidth;
        return;

        //reaching the end of overflowHolder
    } else if (position > cardWidth*(cards.length-cardsShown-1)) {
        const index = parseInt(cards[cards.length-1].dataset.index);
        const HTML = renderSingleCard(testimonials[index === testimonials.length-1 ? 0 : index+1], cardWidth);
        console.log(HTML);
        overflowHolder.insertAdjacentHTML('beforeend', HTML);
        cards[0].remove();
        overflowHolder.style.transform = `translate(-${position-cardWidth}px)`;
        overflowHolder.dataset.move = position-cardWidth;
        return;
    }
    // if (position <= 0 || position > overflowHolder.offsetWidth) return;
    overflowHolder.style.transform = `translate(-${position}px)`;
    overflowHolder.dataset.move = position;
    return position;
}
function mouseReleased(overflowHolder){
    // istraukia, kiek pasislinkusi juosta
    let position = parseFloat(overflowHolder.dataset.move);
    //reikia gauti korteles ploti
    const cardWidth = getCardWidth();
    //how much cards are hidden on the left
    const coef = Math.floor(position/cardWidth);
    //since card can be partly hidden, we need to determine
    //where to scroll left or right

    //min is the position of cards left side, max - of the right
    const min = position - coef*cardWidth;
    const max = (coef+1)*cardWidth - position;

    //we find all testimonial cards and navbar lines
    const cards = overflowHolder.querySelectorAll('.testimonial');
    const barLines = overflowHolder.closest('.testimonials').querySelectorAll('.nav-line');
    //removal of active class from bars
    for (const line of barLines) {
        line.classList.remove('active');
    }
    let indexActive = 0;
    //if card if hidden more than a half, it gets hidden after mouse up
    //also we must change active state of navbar line
    if (min < max) {
        indexActive = parseInt(cards[coef].dataset.index);
        position = coef*cardWidth;
        overflowHolder.dataset.move = position;
        overflowHolder.style.transform = `translate(-${position}px)`;
    } else {
        indexActive = parseInt(cards[coef+1].dataset.index);
        console.log(indexActive);
        position = (coef+1)*cardWidth;
        overflowHolder.dataset.move = position;
        overflowHolder.style.transform = `translate(-${position}px)`;
    }

    barLines[indexActive].classList.add('active');
    // temporarily turning on transition for smooth scroll to position
    overflowHolder.style.transitionDuration = '300ms';
    console.log('mouse released...');
    window.removeEventListener('mousemove', moveMouse);
    window.removeEventListener('mouseup', releaseMouse);
    setTimeout(() => {overflowHolder.style.transitionDuration = '0ms';},400);
    return position;
}

//function to resize card when changing screen size
function resizeCard(cards, count) {

    //resize cards
    const width = getCardWidth();
    for(const card of cards) {
        card.style.width = `${width}px`;
    }
    //move first card appropriate amount
    const overflowHolder = document.querySelector('#testimonials .overflow-holder');
    overflowHolder.style.transform = `translate(-${width*count}px)`;
    overflowHolder.dataset.move = width;
    return;
}

//function to get width
function getCardWidth(){
    //since overflowHolder is flex, it is wider, than screen
    //so widthHolder is closest parent, that determines width
    const widthHolder = document.querySelector('#testimonials .testimonials');
    const holderWidth = widthHolder.offsetWidth;
    const winWidth = window.innerWidth;
    let width = 0;
    if (winWidth < 768) width = holderWidth; //one card per view
    else if (winWidth < 1100) width = holderWidth/2; //two cards per view
    else  width = (Math.floor(holderWidth/3)); //three cards per view
    return width;
}


// function for event listener 'click'
function scrollTestimonials(DOM, number) {
    //find active button that will loose its class
    const beforeDOM = DOM.closest('.navbar').querySelector('.active');
    //active buttons number
    const beforeNumber = parseInt((beforeDOM.classList)[1].match(/[0-9]/g));
    const cardWidth = getCardWidth();
    const overflowHolder = document.querySelector('#testimonials .overflow-holder');
    overflowHolder.style.transitionDuration = '300ms';
    if (number === beforeNumber) return number+1;
    beforeDOM.classList.remove('active');
    overflowHolder.style.transform = `translate(-${cardWidth+cardWidth*number}px)`;
    overflowHolder.dataset.move = cardWidth+cardWidth*number;
    DOM.classList.add('active');
    return number+1;
}




export {renderTestimonials, testimonialsEvents};