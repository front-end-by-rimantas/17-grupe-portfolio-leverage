// function mainVideo {
//     const DOM = document.querySelector('main_video');
//     let HTML = '<div>divu dyvai</div>';
//     console.log('zajabat');
//     return DOM.innerHTML = HTML

// }
import videodata from '../data/main-video.js';

// export default mainVideo;

function mainVideo(){
    
    const DOM = document.getElementById('main_video');

    let HTML = videodata.primaryHtml;

    // console.log(DOM,HTML);

    return DOM.innerHTML = HTML

}

function click() {
    const DOM = document.getElementById('main_video');

    let HTML = videodata.videoHtml;


    return DOM.innerHTML = HTML 
    

}


export default {
    mainVideo, click
}


// document.getElementById("videolink").addEventListener("click", event);


// function event(){
//     console.log('vyksta js')

// }