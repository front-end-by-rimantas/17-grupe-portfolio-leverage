function renderTestimonials(data, selector) {
    renderTestimonialsStructure(data, selector);
    renderCards(data);
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
function renderCards(data){
    const DOM = document.querySelector('#testimonials .overflow-holder');
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
        let rate = '';
        for (let j = 0; j < data[iteration].rating; j++) {
            rate += '<i class="fa fa-star-o" aria-hidden="true"></i>';
        }
        HTML += `<div class="testimonial" style="width: ${width}px;">
                            <div class="card">
                                <div class="person"><img src="./img/${data[iteration].picture}.jpg" alt="persons picture"></div>
                                <h4>${data[iteration].name}</h4>
                                <p>${data[iteration].content}</p>
                                <div class="rating">${rate}</div>
                            </div>
                        </div>`;
    }
    DOM.style.transform = `translate(-${width}px)`;
    DOM.dataset.move = width;
    return DOM.innerHTML = HTML;
}
let moveMouse = () => {};
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
        console.log('mouse down at...', startX);
        window.addEventListener('mousemove', moveMouse = () => mouseMoving(event));
        window.addEventListener('mouseup', mouseReleased);
    })
}
function mouseMoving(event){
    console.log('mouse is moving...');
    const x = event.movementX;
}
function mouseReleased(event){
    console.log('mouse released...');
    window.removeEventListener('mousemove', moveMouse);
    window.removeEventListener('mouseup', mouseReleased);
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