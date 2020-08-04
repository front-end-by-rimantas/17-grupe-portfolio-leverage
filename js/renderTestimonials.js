function renderTestimonials(data, selector) {
    const DOM = document.querySelector(selector);
    const size = data.length;
    let testimonial = '';
    const winWidth = window.innerWidth;
    let width = 0;
    if (winWidth < 768) width = winWidth-67;
    else if (winWidth < 1023) width = (winWidth-97)/2;
    else if (winWidth < 1200) width = Math.floor((winWidth-110)/3);
    else width = 360;
    for (let i = 0; i < size; i++ ) {
        let rate = '';
        for (let j = 0; j < data[i].rating; j++) {
            rate += '<i class="fa fa-star-o" aria-hidden="true"></i>';
        }
        console.log(rate);
        testimonial += `<div class="testimonial" style="width: ${width}px;">
                            <div class="card">
                                <div class="person"><img src="./img/${data[i].picture}.jpg" alt="persons picture"></div>
                                <h4>${data[i].name}</h4>
                                <p>${data[i].content}</p>
                                <div class="rating">${rate}</div>
                            </div>
                        </div>`;
    }
    let navbar = '';
    for (let i = 0; i < data.length; i++){
        navbar += '<div class="nav-line"></div>';
    }

    


    let HTML = `<div class="intro">
                    <h2>customer testimonials</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam lacus, dapibus sed imperdiet.</p>
                </div>
                <div class="testimonials">
                    <div class="overflow-holder">
                        ${testimonial}
                    </div>
                    <div class="navbar">${navbar}</div>
                </div>`;
    return DOM.innerHTML = HTML;
}

function resizeCard(cards) {
    const winWidth = window.innerWidth;
    let width = 0;
    if (winWidth < 768) width = winWidth-67;
    else if (winWidth < 1023) width = (winWidth-97)/2;
    else if (winWidth < 1200) width = (Math.floor((winWidth-110)/3));
    else width = 360;
    for(const card of cards) {
        card.style.width = `${width}px`;
    }

}

export {renderTestimonials, resizeCard};