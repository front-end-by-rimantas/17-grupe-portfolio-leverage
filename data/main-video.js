const primaryHtml = `<div class="row">
<div class="col-12">
    <h2 >Wach the Video</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, eum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora at laudantium doloribus voluptas, porro aliquid.
    </p>
</div>
    
    <div id='videolink' class="col-12">
        <img  src="./img/news-4.jpg" alt="Picture of video" id ='videoImg' class="col-12">
        <div id=buton >
                <i class="fa fa-play-circle"></i>
        </div>
    </div>

    
</div>`;

const videoHtml =
`<div id="player" class="col-12">
    <div id=videocont>
        <button> <i class="fa fa-times-circle"></i> </button>
    </div>  
    <iframe src="https://www.youtube.com/embed/d-ABIIZV3vA?autoplay=0&start=68" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>    
</div>`







export default {
    primaryHtml,videoHtml
};


