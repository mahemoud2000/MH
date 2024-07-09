let mySection = `
        <div class="wrapper edit-animation">
        <div class="static-txt">I'm a Mahmoud Hamed</div>
        <ul class="dynamic-txts">
            <li><span>Frontend Dev</span></li>
        </ul>
    </div>
            <div class="photo">
                <img src="images/myphoto.jpg" alt="Sorry">
            </div>
            <div class="btns">
                <div class="btn-one btn"><a href="">Contact Us</a></div>
                <div class="btn-two btn"><a href="">About me</a></div>
            </div>
            <div class="cv">
                <a href="#" download="true">CV</a>
            </div>
`;
document.getElementById('slider').innerHTML = mySection;

let aboutMe = `
<div class="text">
                <h2>About Me</h2>
                <p>My name Mahmoud Hamed Frontend Developer!My name Mahmoud Hamed Frontend Developer!My name Mahmoud
                    Hamed Frontend Developer!My name Mahmoud Hamed Frontend Developer!My name Mahmoud Hamed</p>
                <a href="#">Let's work together</a>
            </div>
            <div class="pho">
                <img src="images/myphoto.jpg" alt="sorry">
            </div>
` ;
document.getElementById('about').innerHTML = aboutMe;
