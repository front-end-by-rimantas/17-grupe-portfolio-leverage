import renderLightBoxContent from './renderLightBoxContent.js'
function renderContact() {
    const contactsVideo = document.querySelector('#contact .contacts-video img');

    function openLightBox(event) {
        event.target.closest('body').querySelector('.light-box').classList.add('show');
        const videoHTML = document.querySelector('#contact .contacts-video video');
        const HTML = `<video controls poster="https://i.ytimg.com/vi_webp/7e90gBu4pas/maxresdefault.webp" data-type="gallery2">
                            <source src="./video/contactsVideo.mp4" type="video/mp4">
                            <source src="./video/contactsVideo.mp4" type="video/ogg">
                            Jūsų naršyklė nepalaiko vaizdo įrašų tag'ų.
                        </video>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>`
        renderLightBoxContent(1, HTML, 'gallery2');
        const videoPlay = document.querySelector('.light-box .image .gallery > i')

        videoPlay.addEventListener('click', (event) => {
            // console.log(event);
            const arrows = event.target.parentElement.parentElement.querySelectorAll('.fa');
            console.log(arrows);
            for (let i = 0; i < arrows.length; i++) {
                arrows[i].classList.add('remove');
            }
            // event.target.classList.add('remove');
            const video = event.target.parentElement.querySelector('video');
            video.play();
        })
    }
    contactsVideo.addEventListener('click', openLightBox);
    return;
}

export default renderContact;