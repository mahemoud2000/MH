let elementForm = `<form action="#" id="form">
                <span class="back" id="bc-contact"></span>
                <h2>Contact Me</h2>
                <div class="user-phone-mail">
                    <label for="user">User Name</label>
                    <input id="user" type="text" placeholder="Your Name">

                    <label for="phone">Phone</label>
                    <input id="phone" type="number" placeholder="Your phone">

                    <label for="mail">Email</label>
                    <input id="mail" type="email" placeholder="Your Email">
                    <div class="sub-reset">
                        <input type="submit">
                        <input type="reset">
                    </div>
                </div>
            </form>
            <div class="social" id="social">
                <span class="back" id="bc-social"></span>
                <h2>My Social Media</h2>
                <div class="social-links social-links-icones" id="social-links">
                    <div class="face-tik" >
                        <a  href="https://web.facebook.com/profile.php?id=61555905863820&locale=ar_AR" target="_blank"><i class="fa-brands fa-facebook" id="f"></i></a></a>
                    <a href="#"><i class="fa-brands fa-tiktok" id="t"></i></a>
                    </div>
                    <div class="linked-mail" id="l-m">
                    <a href="#"><i class="fa-brands fa-linkedin" id="l"></i></a>
                    <a href="mailto:mahemoudabuelsaoud@gmail.com"><i id="m" class="fas fa-envelope"></i></a>
                    </div>
                    <div class="phone-whats" id="p-w">
                        <a href="https://wa.me/+201144897324" target="_blank"><i id="w" class="fa-brands fa-whatsapp"></i></a>
                    <a href="tel:+201144897324"><i class="fas fa-phone" id="p"></i></a>
                    </div>

                </div>
            </div>
            `;
            document.getElementById('contact').innerHTML = elementForm;
