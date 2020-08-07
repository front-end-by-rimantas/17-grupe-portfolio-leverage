
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
    return DOM.innerHTML = HTML;
}

function testimonialsEvents(){
    // testimonials event listener to resize cards and change navbar size
    const cards = document.querySelectorAll('#testimonials .testimonial');
    const bars = document.querySelector('#testimonials .navbar');
    const winWidth = window.innerWidth;
    let cardsCount = winWidth < 768 ? 1 : winWidth < 1100 ? 2 : 3;
    window.addEventListener('resize', ()=> {
        
        cardsCount = resizeCard(cards, bars, cardsCount);
        // cardsCount = winWidth < 768 ? 1 : winWidth < 1100 ? 2 : 3;
    });

    // testimonials event to scroll cards with buttons
    const navbar = document.querySelectorAll('#testimonials .nav-line');
    for (const navLine of navbar) {
        /* with following we find the number of bar clicked
            every bar has class with a "serial" number  */
        const number = parseInt((navLine.classList)[1].match(/[0-9]/g));
        navLine.addEventListener('click', () => scrollTestimonials(navLine, number));
    }
}


//function to resize card when changing screen size
function resizeCard(cards, bars, count) {

    //resize cards
    const width = getCardWidth();
    for(const card of cards) {
        card.style.width = `${width}px`;
    }
    //move first card appropriate amount
    const overflowHolder = document.querySelector('#testimonials .overflow-holder');
    console.log(overflowHolder.style);
    overflowHolder.style.transform = `translate(-${width}px)`;




    // attempt to make "correct" amount of bars

    //find out how much cards are displayed
    const winWidth = window.innerWidth;
    const cardsCount = winWidth < 768 ? 1 : winWidth < 1100 ? 2 : 3;
    // //check if there was increase or decrease in amount shown
    // if (cardsCount === count) return count;
    // else {
    //     let barsList = bars.querySelectorAll('.nav-line'),
    //             size = barsList.length;
    //     if (cardsCount < count) { //descrease
    //         //add a bar
    //         bars.insertAdjacentHTML('beforeend', `<div class="nav-line line${size}"></div>`);
    //         //new list now and diffent size
    //         barsList = bars.querySelectorAll('.nav-line');
    //         size++;
    //         //a number of the new added bar
    //         const number = parseInt((barsList[size-1].classList)[1].match(/[0-9]/g));
    //         // add event listener for the new bar
    //         barsList[size-1].addEventListener('click', () => scrollTestimonials(barsList[size-1], number));
    //     } else {                        //increase
    //         const isActive = barsList[size-1].classList;
    //         if(isActive[2]) {
    //             barsList[size-2].classList.add('active');
    //         } 
    //         barsList[size-1].remove(); //delete a bar
    //     } 
    // }
    //reikia suzinoti, kiek korteliu rodoma ir kiek tagu atvaizduoti

    return cardsCount;
}

//function to get width
function getCardWidth(){
    const widthHolder = document.querySelector('#testimonials .testimonials');
    const holderWidth = widthHolder.offsetWidth;
    const winWidth = window.innerWidth;
    let width = 0;
    if (winWidth < 768) width = holderWidth;
    else if (winWidth < 1100) width = holderWidth/2;
    else  width = (Math.floor(holderWidth/3));
    return width;
}


// function for event listener 'click'
function scrollTestimonials(DOM, number) {
    const beforeDOM = DOM.closest('.navbar').querySelector('.active');
    const beforeNumber = parseInt((beforeDOM.classList)[1].match(/[0-9]/g));
    const cardWidth = getCardWidth();
    const overflowHolder = document.querySelector('#testimonials .overflow-holder');
    if (number === beforeNumber) return;
    beforeDOM.classList.remove('active');
    overflowHolder.style.transform = `translate(-${cardWidth+cardWidth*number}px)`;
    DOM.classList.add('active');
}

export {renderTestimonials, testimonialsEvents};