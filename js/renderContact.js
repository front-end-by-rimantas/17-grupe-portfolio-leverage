import renderContactLightBox from './renderContactLightBox.js'
import renderLightBoxGallery from './renderLightBoxGallery.js';
import contact from '../data/contact.js';

function renderContact() {
    const { selector, firstStepData, secondStepData, thirdStepData, sendMessage } = contact;
    //Render contact section
    const DOM = document.querySelector(selector);
    let HTML = `<div class="row col-12 contacts">
                    <div class="row col-6 contacts-content">
                        <h2 class="contacts-title">${firstStepData.title}</h2>
                        <p class="contacts-description">${firstStepData.description}</p>
                        <div class="action-progress">
                            <div class="progress-bar">
                                <div class="fill"></div>
                            </div>
                            <div class="steps">
                                <div class="step">
                                    <div class="number">1</div>
                                    <p class="step-name">${firstStepData.firstStepName}</p>
                                </div>
                                <div class="step">
                                    <div class="number deactive">2</div>
                                    <p class="step-name">${firstStepData.secondStepName}</p>
                                </div>
                                <div class="step">
                                    <div class="number deactive">3</div>
                                    <p class="step-name">${firstStepData.thirdStepName}</p>
                                </div>
                            </div>
                        </div>
                        <input type="text" placeholder="${firstStepData.input1}">
                        <input type="email" placeholder="${firstStepData.input2}">
                        <input type="tel" placeholder="${firstStepData.input3}">
                        <div class="button next">Next <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
                    </div>
                    <div class="row col-6 contacts-video">
                        <img src="${firstStepData.videoImagePath}" alt="contact-image">
                        <div class="gallery" data-type="gallery2">
                            <video controls poster="${firstStepData.videoPosterPath}">
                                <source src="${firstStepData.videoPath}" type="video/mp4">
                                <source src="${firstStepData.videoPath}" type="video/ogg">
                                Jūsų naršyklė nepalaiko vaizdo įrašų tag'ų.
                            </video>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </div>
                        <div class="mask-radius"></div>
                        <div class="play-button">
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>`
    DOM.innerHTML = HTML;
    //Render lightBox
    renderContactLightBox();

    //Second step after click NEXT
    const nextButton = document.querySelector('.contacts-content > .next');
    function renderSecondStep() {
        const DOM = document.querySelector('.contacts');
        HTML = `<div class="row col-6 contacts-content">
                    <h2 class="contacts-title">${secondStepData.title}</h2>
                    <p class="contacts-description">${secondStepData.description}</p>
                    <div class="action-progress">
                        <div class="progress-bar">
                            <div class="fill second"></div>
                        </div>
                        <div class="steps">
                            <div class="step">
                                <div class="number">1</div>
                                <p class="step-name">${secondStepData.firstStepName}</p>
                            </div>
                            <div class="step">
                                <div class="number">2</div>
                                <p class="step-name">${secondStepData.secondStepName}</p>
                            </div>
                            <div class="step">
                                <div class="number deactive">3</div>
                                <p class="step-name">${secondStepData.thirdStepName}</p>
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="${secondStepData.input1}">
                    <input type="text" placeholder="${secondStepData.input2}">
                    <select style="color: grey;" name="budgetRange" id="budgetRange-select">
                        <option value="">${secondStepData.input3}</option>
                        <option value="dog">Less than &dollar;2.000</option>
                        <option value="cat">&dollar;2.000 - &dollar;5.000</option>
                        <option value="hamster">&dollar;5.000 - &dollar;10.000</option>
                        <option value="parrot">&dollar;10.000+</option>
                    </select>
                    <div class="button prev"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Prev</div>
                    <div class="button next">Next <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
                </div>
                <div class="row col-6 contacts-video">
                    <img data-type="gallery2" src="${secondStepData.imagePath}" alt="contact-image">
                </div>`
        DOM.innerHTML = HTML;
        renderLightBoxGallery('gallery2');
        const nextButton = document.querySelector('.contacts-content > .next');
        const prevButton = document.querySelector('.contacts-content > .prev');

        function renderThirdStep() {
            const DOM = document.querySelector('.contacts');
            HTML = `<div class="row col-6 contacts-content">
                        <h2 class="contacts-title">${thirdStepData.title}</h2>
                        <p class="contacts-description">${thirdStepData.description}</p>
                        <div class="action-progress">
                            <div class="progress-bar">
                                <div class="fill third"></div>
                            </div>
                            <div class="steps">
                                <div class="step">
                                    <div class="number">1</div>
                                    <p class="step-name">${thirdStepData.firstStepName}</p>
                                </div>
                                <div class="step">
                                    <div class="number">2</div>
                                    <p class="step-name">${thirdStepData.secondStepName}</p>
                                </div>
                                <div class="step">
                                    <div class="number">3</div>
                                    <p class="step-name">${thirdStepData.thirdStepName}</p>
                                </div>
                            </div>
                        </div>
                        <textarea type="text" rows="7" placeholder="${thirdStepData.inputMessage}"></textarea>
                        <div class="button prev"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Prev</div>
                        <div class="button next">Next <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
                    </div>
                    <div class="row col-6 contacts-video">
                        <img data-type="gallery2" src="${thirdStepData.imagePath}" alt="contact-image">
                    </div>`
            DOM.innerHTML = HTML;
            renderLightBoxGallery('gallery2');

            const prevButton = document.querySelector('.contacts-content > .prev');
            const nextButton = document.querySelector('.contacts-content > .next');
            function renderAndSendData() {
                const DOM = document.querySelector(selector);
                HTML = `<div class="row col-12 contacts no-before">
                            <div class="row col-6 contacts-content sent">
                                <div class="sent-block">
                                    <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                    <h2 class="contacts-title successMessage">${sendMessage.successMessage}</h2>
                                    <div class="button refresh"><i class="fa fa-refresh" aria-hidden="true"></i>Refresh</div>
                                </div>
                            </div>
                            <div class="row col-6 contacts-video">
                                <img data-type="gallery2" src="${sendMessage.imagePath}" alt="contact-image">
                            </div>
                        </div>`
                DOM.innerHTML = HTML;
                renderLightBoxGallery('gallery2');
                const refreshButton = document.querySelector('.contacts-content > .sent-block > .refresh');
                function refresh() {
                    window.location.reload();
                }
                refreshButton.addEventListener('click', refresh);
            }
            prevButton.addEventListener('click', renderSecondStep);
            nextButton.addEventListener('click', renderAndSendData);
        }

        prevButton.addEventListener('click', renderContact);
        nextButton.addEventListener('click', renderThirdStep);
    }
    nextButton.addEventListener('click', renderSecondStep);

    return;
}

export default renderContact;