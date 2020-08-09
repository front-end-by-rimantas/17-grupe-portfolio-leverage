
/* const widthHolder = document.querySelector('#testimonials .testimonials');
    const holderWidth = widthHolder.offsetWidth;
    const winWidth = window.innerWidth;
    let width = 0;
    if (winWidth < 768) width = holderWidth;
    else if (winWidth < 1023) width = holderWidth/2;
    else if (winWidth < 1200) width = (Math.floor(holderWidth/3));
    else width = holderWidth/3;
    return width;*/

function renderTestimonials(data, selector) {
    renderTestimonialsStructure(data, selector);
    renderCards(data);
}

function renderTestimonialsStructure(data, selector) {
    const DOM = document.querySelector(selector);
    let navbar = '';
    for (let i = 0; i < data.length; i++){
        navbar += `<div class="nav-line line${i+1}"></div>`;
    }
    let HTML = `<div class="row">
                    <div class="intro col-12">
                        <h2>customer testimonials</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam lacus, dapibus sed imperdiet.</p>
                    </div>
                </div>
                <div class="testimonials">
                    <div class="overflow-holder"></div>
                    <div class="navbar">${navbar}</div>
                </div>`;
    return DOM.innerHTML = HTML;
}

function testimonialsEvents(){
    // testimonials event listener to resize cards
    const cards = document.querySelectorAll('#testimonials .testimonial');
    window.addEventListener('resize', ()=> resizeCard(cards));

    // testimonials event to scroll cards
    const navbar = document.querySelectorAll('#testimonials .nav-line');
    for (const navLine of navbar) {
        const number = parseInt((navLine.classList)[1].match(/[0-9]/g));
        navLine.addEventListener('click', () => scrollTestimonials(navLine))
    }
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

//function to resize card when changing screen size
function resizeCard(cards) {
    const width = getCardWidth();
    for(const card of cards) {
        card.style.width = `${width}px`;
    }
}

//function to get width
function getCardWidth(){
    // const winWidth = window.innerWidth;
    // let width = 0;
    // if (winWidth < 768) width = winWidth-67;
    // else if (winWidth < 1023) width = (winWidth-97)/2;
    // else if (winWidth < 1200) width = (Math.floor((winWidth-110)/3));
    // else width = 1140/3;
    // return width;
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
function scrollTestimonials(DOM) {
    console.log('click');
}

export {renderTestimonials, testimonialsEvents};