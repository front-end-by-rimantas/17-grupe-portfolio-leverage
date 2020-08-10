function renderFooter( selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length
    for ( let i=0; i<size; i++ ) {
        const footer = data[i];
        HTML += `<div class="footer row col-12">
                    <div class="company col-12">
                        <a class="lever" href="#">${footer.tile}</a>
                        <p>${footer.p1}</p>
                        <p>${footer.p2}</p>
                        <div class="social col-12">
                            <a href="#"><i class="${footer.instagram}" aria-hidden="true"></i></a>
                            <a href="#"><i class="${footer.fb}" aria-hidden="true"></i></a>
                            <a href="#"><i class="${footer.linkedin}" aria-hidden="true"></i></a>
                            <a href="#"><i class="${footer.twiter}" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div class="get-in-touch col-12">
                        <h2>${footer.tile}</h2>
                        <a href="#"><i class="${footer.phone}" aria-hidden="true"></i> +1123 98765 4321</a>
                        <a href="#"><i class="${footer.email}" aria-hidden="true"></i>hello@business.com</a>
                        <a href="#"><i class="${footer.map}" aria-hidden="true"></i>office street, 123</a>
                        <div class="button send-a-message-button">
                            <i class="fa fa-commenting-o" aria-hidden="true"></i>
                            <span class="hidden">send a message</span>
                        </div>
                    </div>
                    <div class="our-services col-12">
                        <h2>${footer.tile}</h2>
                        <a href="#">${footer.a1}</a>
                        <a href="#">${footer.a2}</a>
                        <a href="#">${footer.a3}</a>
                        <a href="#">${footer.a4}</a>
                        <a href="#">${footer.a5}</a>
                    </div>
                    <div class="popular-tags col-12">
                        <h2>${footer.tile}</h2>
                        <a href="#">${footer.a1}</a>
                        <a href="#">${footer.a2}</a>
                        <a href="#">${footer.a3}</a>
                        <a href="#">${footer.a4}</a>
                        <a href="#">${footer.a5}</a>
                        <a href="#">${footer.a6}</a>
                        <a href="#">${footer.a7}</a>
                        <a href="#">${footer.a8}</a>
                    </div>
                </div>
            </footer>
            <div id="rights" class="copyrights row col-12">
                <p class="left col-6">${footer.left}</p>
                <p class="right col-6">${footer.right}</p>
            </div>`
    }
    return DOM.innerHTML += HTML;
}

export default renderFooter;