const primaryHtml = `<div class="row">
<div class="col-12">
    <h2 >Wach the Video</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, eum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora at laudantium doloribus voluptas, porro aliquid.
    </p>
</div>
    
    <a  target="_blank" href="#" id='videolink' class="col-12">
        <img  src="./img/news-4.jpg" alt="Picture of video" id ='videoImg' class="col-12">
        <div id=buton >
                <i class="fa fa-play-circle"></i>
        </div>
    </a>

    
</div>`;

const videoHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css">

</head>
<body>
    <div id=videocont>
        <button>
            X
        </button>

    <div id='sceen'>

        <iframe src="https://www.youtube.com/embed/d-ABIIZV3vA?autoplay=0&start=68" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>


</body>
</html>`




export default function mainVideo(){
    
    const DOM = document.getElementById('main_video');

    let HTML = `<div class="row">
    <div class="col-12">
        <h2 >Wach the Video</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, eum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora at laudantium doloribus voluptas, porro aliquid.
        </p>
    </div>
        <a  target="_blank" href="#" id='videolink' class="col-12">
            <img  src="./img/news-4.jpg" alt="Picture of video" id ='videoImg' class="col-12">
            <div id=buton >
                    <i class="fa fa-play-circle"></i>
            </div>
        </a>

        
    </div>`;

    console.log(DOM,HTML);

    return DOM.innerHTML = HTML

}




