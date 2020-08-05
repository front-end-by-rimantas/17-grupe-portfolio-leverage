// Main function to render Skill container
function renderSkillContent(data) {
    skillData = data;
    const DOM = document.querySelector("#skills");
    let HTML = `
    ${renderTop(data.title, data.description)}
    ${renderBottom(data.skills)}
    ${renderVerticalDash()}
    `;

    return DOM.innerHTML = HTML;
}

// Render top container info
function renderTop(title, description) {
    return `
    <div class="row">
        <div class="col-12 skill-container-top">
            <h1>${title}</h1>
            <p>${description}</p>
        </div>
    </div>`;
}
// Render bottom container: circle loader and loaders info
function renderBottom(skills) {
    const size = skills.length;
    let HTML = "";
    for (let i = 0; i < size; i++) {
        HTML += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 item">
                    <div class="skill-gauge">
                        <div class="percent">
                            <svg height="120" width="120">
                                <circle cx="60" cy="60" r="55" fill="none" stroke= "${skills[i].colorGrade.background}" />
                                <circle cx="60" cy="60" r="55" class="progress-ring-circle" stroke= "url(#gradient${i})"/>
                                <defs>
                                    <linearGradient id="gradient${i}" x1="0%" y1="50%" x2="80%" y2="0%">
                                    <stop offset="0%" stop-color="${skills[i].colorGrade.first}" />
                                    <stop offset="100%" stop-color="${skills[i].colorGrade.second}"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="skill-gauge-value">
                                <h2 class="value">${0}</h2>
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                    <div class="skill-name">${skills[i].name}</div>
                </div>`;
    }

    return `<div class="row skill-container-bottom">
            ${HTML}
            </div>`;
}

// Render vertical dash...
function renderVerticalDash() {
    return `<div class="vertical-dash"></div>`;
}

// Checking is container visible to run animation
let startCircleAnimation = function (e) {
    
    let top = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#skills').offsetTop + window.innerHeight - 350;
    if (isVisible && singleRun) {
        let skillArr = [];
        singleRun = false;
        let size = skillData.skills.length;
        for (let i = 0; i < size; i++) {
            skillArr.push(skillData.skills[i].value);
        }
        skillGaugeAnimation(skillArr);
        let skill = document.querySelector('.skill-container-bottom');
        skill.classList.add('animate');
    }
}

// For event listene listener
let skillData;
let singleRun = true;
document.addEventListener('scroll', startCircleAnimation );
// Circle animation 
function skillGaugeAnimation(percent) {
    const numberText = document.querySelectorAll(".skill-gauge-value > .value");
    const circleL = document.querySelectorAll('svg > .progress-ring-circle');
    const circleLength = circleL.length;
    for (let i = 0; i < circleLength; i++) {
        numberText[i].innerText = 0;
        var circle = circleL[i];
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - +percent[i] / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }
    delayRender(percent);
}

// Circle numbers animation/counter
function renderNumbers(percent) {
    const numberText = document.querySelectorAll(".skill-gauge-value > .value");

    for (let i = 0; i < numberText.length; i++) {
        let number = percent[i]
        const maxSeconds = 4,
            totalTime = maxSeconds % 1 === 0 ? maxSeconds * 1000 : Math.round(maxSeconds) * 1000;
        const fps = 30,
            timegap = 1000 / fps,
            totalFrames = (totalTime / 1000 * fps);
        let currentNumber = 0,
            currentFrame = 0;
        numberText[i].innerText = currentNumber;
        const timer = setInterval(() => {
            let totalFrames5 = totalFrames / 10;

            // 0 iki 20 %
            if (totalFrames5 * 2 > currentFrame) {
                currentNumber += (number / totalFrames) - number / totalFrames / 100 * 80;
            }
            // 20 iki 50 %
            if (totalFrames5 * 5 > currentFrame && totalFrames5 * 2 <= currentFrame) {
                currentNumber += (number / totalFrames) + number / totalFrames / 100 * 5;
            }
            // 50 iki 80 %
            if (totalFrames5 * 8 > currentFrame && totalFrames5 * 5 <= currentFrame) {
                currentNumber += (number / totalFrames) + number / totalFrames / 100 * 100;
            }

            // 80 iki 100 %
            if (totalFrames > currentFrame && totalFrames5 * 8 <= currentFrame) {
                currentNumber += (number / totalFrames) - number / totalFrames / 100 * 80;
            }
            
            currentFrame++;
            numberText[i].innerText = Math.round(currentNumber);
            if (currentFrame >= totalFrames) {
                clearInterval(timer);
            }
        }, timegap);
    }
}

// Delay for numbers animation 
function delayRender(percent) {
    setTimeout(renderNumbers, 1000, percent);
}

export {startCircleAnimation, renderSkillContent};
