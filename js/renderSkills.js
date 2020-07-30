function renderSkills(percent) {

    let circleL = document.querySelectorAll('.progress-ring__circle');
    console.log(circleL);
    for(let i = 0;i < circleL.length; i++){
        console.log();
        var circle = circleL[i];
        console.log(circle);
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        console.log(percent[i]);
    
        const offset = circumference - percent[i] / 100 * circumference;
        console.log("Hello");
        console.log(offset);
        circle.style.strokeDashoffset = offset;
    }


    // var circle = document.querySelector('circle:nth-child(2)');
    // console.log(circle);
    // var radius = circle.r.baseVal.value;
    // var circumference = radius * 2 * Math.PI;
    // circle.style.strokeDasharray = `${circumference} ${circumference}`;
    // circle.style.strokeDashoffset = `${circumference}`;
    // console.log(circumference);

    // const offset = circumference - percent / 100 * circumference;
    // console.log("Hello");
    // console.log(offset);
    // circle.style.strokeDashoffset = offset;
}
export default renderSkills;