function next() {
    document.getElementById('myphoto').src="images/myphoto.jpg";
};
function back() {
    document.getElementById('myphoto').src="images/protfolio.png";
};
let mySection = `
        <div class="wrapper edit-animation">
        <div class="static-txt">I'm a Mahmoud Hamed</div>
        <ul class="dynamic-txts">
            <li><span>Frontend Dev</span></li>
        </ul>
    </div>
            <div class="photo">
                <img src="images/protfolio.png"" alt="Sorry" id="myphoto">
                <div class="next-back">
                <button onclick="back();"">Back</button>
                    <button onclick="next();"">Next</button>
                </div>
            </div>
            <div class="btns">
                <div class="btn-one btn"><a href="#contact">Contact Us</a></div>
                <div class="btn-two btn"><a href="#about">About me</a></div>
            </div>
            <div class="cv">
                <a href="../download/cv.pdf" download="Cv-Mahmoud Hamed">CV</a>
            </div>
`;
document.getElementById('slider').innerHTML = mySection;


function nextTwo() {
    document.getElementById('photo-about').src="images/myphoto.jpg";
};
function backTwo() {
    document.getElementById('photo-about').src="images/protfolio.png";
};
let aboutMe = `
<div class="text">
                <h2>About Me</h2>
                <p>My name Mahmoud Hamed Frontend Developer!My name Mahmoud Hamed Frontend Developer!My name Mahmoud
                    Hamed Frontend Developer!My name Mahmoud Hamed Frontend Developer!My name Mahmoud Hamed</p>
                <a href="#contact">Let's work together</a>
            </div>
            <div class="pho">
                <img src="images/protfolio.png" alt="sorry" id="photo-about">
                <div class="next-back">
                <button onclick="backTwo();"">Back</button>
                    <button onclick="nextTwo();"">Next</button>
                </div>
            </div>
` ;
document.getElementById('about').innerHTML = aboutMe;
