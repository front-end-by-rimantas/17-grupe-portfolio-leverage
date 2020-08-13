import { testimonials } from '../data/testimonials.js';

// variables, that will be used thoughout this file
//cards shown is the amount shown at the same time. It depends on screen width
//it is set to one, because we start from mobile version
let cardsShown = 1;
//overflowHolder is the flex, where all the cards are created
//it is set to null now, because it is created later with function
let overflowHolder = null;

//the main exported function that inserts HTML into index.html file
function renderTestimonials(data, selector) {
    //firstly the structure is created (without cards)
    renderTestimonialsStructure(data, selector);
    //after creation of the structure, now overflowHolder can have set value
    overflowHolder =  document.querySelector('#testimonials .overflow-holder');
    // renderCards is separate function because it is used in other functions as well
    //so it was more convenient tohave it this way
    renderCards(data, overflowHolder);
    const width = getCardWidth();
    //when cards are rendered, the overflowHolder must be translated appropriate amount to the left
    overflowHolder.style.transform = `translate(-${width}px)`;
    overflowHolder.dataset.move = width;
}
/*  renderTestimonials function was split into two because renderCards
    has to find element that is created in renderTestimonialsStructure
    and calculate card width from its parent element */


function renderTestimonialsStructure(data, selector) {
    const DOM = document.querySelector(selector);
    const winWidth = window.innerWidth;
    //the first time the number of cards shown is determined
    if (winWidth < 768) cardsShown = 1;
    else if (winWidth < 1023) cardsShown = 2;
    else cardsShown = 3;
    // navbar will consist of lines for navigation of testimonials
    let navbar = '';
    for (let i = 0; i < data.length; i++){
        //what's important, each nav-line must have dataset.lineno which will be used for cards indexing
        // the first nav-line gets class "active"
        navbar += `<div class="nav-line${i===0 ? ' active' : ''}" data-lineno="${i}"></div>`;
    }
    //the main HTML that will be inserted into index.html
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
    const width = getCardWidth();
    let HTML = '';
    /*  since max cards shown are 3, we make sure, 
        there's at least 1 card on the right hidden
        with howMuch */

    //we start from -1, because there must be one card hidden on the left, and end with +2, because
    //there must be extra 2 cards in case there are 3 cards visible on the screen
    for (let i = -1; i < size+3; i++ ) {
        if (i < 0) {HTML += renderSingleCard(data[size+i], width);}
        else if (i >= size) {HTML += renderSingleCard(data[i - size], width)}
        else {HTML += renderSingleCard(data[i], width);}
    }
    //in this case, DOM is overflowHolder
    return DOM.innerHTML = HTML;
}

//function to render a single testimonials card
function renderSingleCard(data, width){
    let rate = '';
    for (let i = 0; i < data.rating; i++) {
        rate += '<i class="fa fa-star-o" aria-hidden="true" draggable="false"></i>';
    }
    return `<div class="testimonial" data-index="${data.index}" style="width: ${width}px;" draggable="false">
                            <div class="card">
                                <div draggable="false" class="person" style="background-image: url(./img/${data.picture}.jpg)"></div>
                                <h4 draggable="false">${data.name}</h4>
                                <p draggable="false">${data.content}</p>
                                <div class="rating" draggable="false">${rate}</div>
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
    //cardsCount is variable which knows how many cards are hidden on the left side
    //on loading it is one card
    let cardsCount = 1;
    
    //testimonials event to resize cards when window is resized
    window.addEventListener('resize', ()=> {resizeCard(cardsCount);});




    // testimonials event to scroll cards with buttons
    const navbar = document.querySelectorAll('#testimonials .nav-line');
    
    for (const navLine of navbar) {
        /* with following we find the number of bar clicked
            every bar has dataset with a "serial" number  */
        const number = parseInt(navLine.dataset.lineno);
        navLine.addEventListener('click', () => {
            cardsCount = scrollTestimonials(navLine, number);
        });
    }
    



    //testimonials event that will move cards on drag
    overflowHolder.addEventListener('mousedown',  ()=>{
        window.addEventListener('mousemove', moveMouse = () => {
            mouseMoving(event, overflowHolder);
        });
        window.addEventListener('mouseup',releaseMouse = () => {
            cardsCount = mouseReleased(overflowHolder);
        });
    })
}


// function for event listener 'click'
function scrollTestimonials(DOM, number) {
    //find active button that will loose its class
    const beforeDOM = DOM.closest('.navbar').querySelector('.active');
    //active button's number
    const beforeNumber = parseInt(beforeDOM.dataset.lineno);
    const cardWidth = getCardWidth();
    //we find, how much width is hidden
    let hiddenWidth = parseFloat(overflowHolder.dataset.move);
    // we count how much cars are hidden
    const cardsHidden = Math.floor(hiddenWidth / cardWidth);
    // the 'diff' is the difference between the button pressed and the button that was active
    //if 'diff' is positive, cards go left, if negative - right
    const diff = number - beforeNumber;
    //check width is how much overflowHolder will have to be moved
    const checkWidth = diff*cardWidth;
    if (number === beforeNumber) return cardsHidden; // if the same button clicked, do nothing


    /*  we might need to create new cards when scrolling left of right
        since we want cards go infinite loop we might need to add new
        cards during scroll
    */
    let cards = overflowHolder.querySelectorAll('.testimonial');

    // in case there are not enough cards on the left
    if (-checkWidth >= hiddenWidth) { // '-checkWidth' is used because 'checkWidth' is negative after calculation
        //we calculate, how much cards we will need to generate
        //+1 is used so that there will be 1 cards hidden after scroll
        const cardsNeeded = ((-checkWidth - hiddenWidth) / cardWidth)+1;
        for (let i = 0; i < cardsNeeded; i++) {
            //we find out, what index is in card dataset
            const index = parseInt(cards[0].dataset.index);
            //when we have index, we will create a new card that is before the one from testimonials.js
            const HTML = renderSingleCard(testimonials[index === 0 ? testimonials.length -1: index-1], cardWidth);
            //cards is inserted in the beginning
            overflowHolder.insertAdjacentHTML('afterbegin', HTML);
            //overflowHolder is translated appropriate amount equal to new card width
            overflowHolder.style.transform = `translate(-${hiddenWidth+cardWidth}px)`;
            //dataset is also updated
            overflowHolder.dataset.move = `${hiddenWidth+cardWidth}`;
            //hidden width is now diferent that it was at the beginning of the function
            //it is updated because it will be used later
            hiddenWidth += cardWidth;
            //the last card is unnecessary, so it is removed
            cards[cards.length-1].remove();
            //a new area of cards if selected
            cards = overflowHolder.querySelectorAll('.testimonial');
        }

        //else, in case there are not enough cards on the right
    } else if (checkWidth+hiddenWidth >= cardWidth*(cards.length - cardsShown) ) {
        //we calculate, how much cards we will need to generate
        //+1 is used so that there will be 1 cards hidden on the right after scroll
        const cardsNeeded = 1+(checkWidth+hiddenWidth - cardWidth*(cards.length - cardsShown)) / cardWidth;
        for (let i = 0; i < cardsNeeded; i++) {
            //we find out, what index is in card dataset
            const index = parseInt(cards[cards.length-1].dataset.index);
            //when we have index, we will create a new card that is after the one from testimonials.js
            const HTML = renderSingleCard(testimonials[index === testimonials.length-1 ? 0 : index+1], cardWidth);
            //cards is inserted in the end
            overflowHolder.insertAdjacentHTML('beforeend', HTML);
            //the first card is unnecessary, so it is removed
            cards[0].remove();
            //overflowHolder is translated appropriate amount equal to removed card width
            overflowHolder.style.transform = `translate(-${hiddenWidth-cardWidth}px)`;
            //dataset is also updated
            overflowHolder.dataset.move = `${hiddenWidth-cardWidth}`;
            //hidden width is now diferent that it was at the beginning of the function
            //it is updated because it will be used later
            hiddenWidth -= cardWidth;
            //a new area of cards if selected
            cards = overflowHolder.querySelectorAll('.testimonial');
        }
    }
    /*  there was a bug. when there were not enough cards for scrolling, particularly
        one card, there was no smooth scroll, just instantaneous change, because new
        new cards was generated, overflowHolder moved by new card width and then
        moved again by the same amount back (the same to the other direction)
        the result was overflowHolder stayed in the same spot.
        setTimeout was added, so the cards first were created and overflowHolder
        was translated by appropiate amount, when it could be moved back smoothly
        and no new cards appearance was visible. 10 ms delay was enough */
    setTimeout(() => {
    // for smooth cards scroll, transition duration added
    overflowHolder.style.transitionDuration = '300ms';
    //new class 'active' is added to the pressed button
    DOM.classList.add('active');
    // class 'active' removed from old button
    beforeDOM.classList.remove('active');
    //overflowHolder is translated by appropriate amount 
    overflowHolder.style.transform = `translate(-${hiddenWidth+checkWidth}px)`;
    //overflowHolder dataset is updated as well
    overflowHolder.dataset.move = `${hiddenWidth+checkWidth}`;
    //new set timeout added to wait, until cards smoothly scrolled, then
    //transition duoration is removed
    setTimeout(() => {overflowHolder.style.transitionDuration = '0ms';},300)
    },10);

    //the number of cards hidden on the left is returned
    return Math.floor((hiddenWidth+checkWidth) / cardWidth);
}


function mouseMoving(event, overflowHolder){
    // variable x 'knows' how much mouse was translated
    const x = event.movementX;
    const cards = overflowHolder.querySelectorAll('.testimonial');
    const cardWidth = getCardWidth()
    //position is new overflowHolder position
    let position = parseFloat(overflowHolder.dataset.move) - x;

    //in case scroll reaches last card, function needs to add more and at the sime time,
    //remove from other side
    const winWidth = window.innerWidth;
    //reaching start of overflowHolder
    if (position < cardWidth){
        //index of the first card
        const index = parseInt(cards[0].dataset.index);
        //a new card is rendered
        const HTML = renderSingleCard(testimonials[index === 0 ? testimonials.length-1 : index-1], cardWidth);
        // card is added at the beginning
        overflowHolder.insertAdjacentHTML('afterbegin', HTML);
        //last card is unnecessary, so it is removed
        cards[cards.length-1].remove();
        //overflowHolder is translated appropriate amount to the left
        overflowHolder.style.transform = `translate(-${position+cardWidth}px)`;
        //dataset is updated
        overflowHolder.dataset.move = position+cardWidth;
        return;

        //reaching the end of overflowHolder
    } else if (position > cardWidth*(cards.length-cardsShown-1)) {
        //index of the last card
        const index = parseInt(cards[cards.length-1].dataset.index);
        //a new card is rendered
        const HTML = renderSingleCard(testimonials[index === testimonials.length-1 ? 0 : index+1], cardWidth);
        // card is added at the end
        overflowHolder.insertAdjacentHTML('beforeend', HTML);
        //the first card is unnecessary, so it is removed
        cards[0].remove();
        //overflowHolder is translated appropriate amount to the right
        overflowHolder.style.transform = `translate(-${position-cardWidth}px)`;
        //dataset is updated
        overflowHolder.dataset.move = position-cardWidth;
        return;
    }
    // when moving overflowHolder is translated the amount equal to position
    overflowHolder.style.transform = `translate(-${position}px)`;
    //dataaset is updated by the same amount
    overflowHolder.dataset.move = position;
    return;
}

//function for event listener mouseup
function mouseReleased(overflowHolder){
    // variable 'position' gets how much overflowHolder is translated
    let position = parseFloat(overflowHolder.dataset.move);
    const cardWidth = getCardWidth();
    //how much cards are hidden on the left
    //since one card will be partly hidden, 'coef' knows, how many
    //cards are fully hidden
    const coef = Math.floor(position/cardWidth);

    //since one card will be partly hidden, we need to determine
    //what to do, hide it or show it after mouse is released
    //min is the position of card left side, max - of the right
    const min = position - coef*cardWidth;
    const max = (coef+1)*cardWidth - position;

    //we find all testimonial cards and navbar lines
    const cards = overflowHolder.querySelectorAll('.testimonial');
    const barLines = overflowHolder.closest('.testimonials').querySelectorAll('.nav-line');

    //after scrolling new navbar line will be active
    //so first class 'active' must be removed from all bars
    for (const line of barLines) {
        line.classList.remove('active');
    }
    //a new variable which will 'know' which navline to 'activate'
    let indexActive = 0;

    //if card if hidden at least a half, it gets hidden after mouse up
    //also we must change active state of navbar line
    if (min < max) {
        //indexActive is equal to the card, that was partly hidden
        indexActive = parseInt(cards[coef].dataset.index);
        //position will be amount, that overflowHolder will be hidden
        position = coef*cardWidth;
    } else {
        indexActive = parseInt(cards[coef+1].dataset.index);
        position = (coef+1)*cardWidth;
    }
    //new 'active' navbar line
    barLines[indexActive].classList.add('active');
    // temporarily turning on transition for smooth scroll to position
    overflowHolder.style.transitionDuration = '300ms';
    //overflowHolder is translated to appropriate pasition
    overflowHolder.style.transform = `translate(-${position}px)`;
    // dataset updated
    overflowHolder.dataset.move = position;

    //mousemove and mouseup events are removed, since they will not be necessary any more
    //until the next mousedown event
    window.removeEventListener('mousemove', moveMouse);
    window.removeEventListener('mouseup', releaseMouse);

    //setTimeout is set to wait until overflowHolder moved to position smoothly
    setTimeout(() => {overflowHolder.style.transitionDuration = '0ms';},300);
    
    
    //the number of cards hidden on the left is returned
    return Math.floor(position/cardWidth);
}

//function to resize card when changing screen size
//parameter 'count' is the amount of hidden cards on the left
function resizeCard(count) {
    const cards = overflowHolder.querySelectorAll('.testimonial');
    //new card width is calculated
    const width = getCardWidth();
    //new card width is applied to every card
    for(const card of cards) {
        card.style.width = `${width}px`;
    }
    //move first card appropriate amount
    overflowHolder.style.transform = `translate(-${width*count}px)`;
    overflowHolder.dataset.move = `${width*count}`;
    return;
}

//function to get card width
function getCardWidth(){
    //since overflowHolder is flex, it is wider, than screen
    //so widthHolder is closest parent, that determines width since it is
    //100% of its parent
    const widthHolder = document.querySelector('#testimonials .testimonials');
    const holderWidth = widthHolder.offsetWidth;
    const winWidth = window.innerWidth;
    let width = 0;
    //based on screen width we know how much cards must be shown
    //at the the time, so calculate card width by dividing
    //withHolder's width by shown cards number
    if (winWidth < 768) width = holderWidth; //one card per view
    else if (winWidth < 1100) width = holderWidth/2; //two cards per view
    else  width = (Math.floor(holderWidth/3)); //three cards per view
    //calculated width is returned
    return width;
}






export {renderTestimonials, testimonialsEvents};