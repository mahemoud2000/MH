let elementForm = `

        <form action="#" id="form" class="phon">
            <span class="back" id="bc-contact"></span>
            <h2 class="h-pho">Contact Us</h2>
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

            <div class="main-contact"> 
                <div class="contact">
                <h2 class="h-pc">Contact Us</h2>
                <p>Any question or remarks? Just us a message</p>
                <form class="pc">
                <div class="inputs">
                    <div class="mail">
                        <label>Email</label>
                        <input type="mail" class="in ma" placeholder="Enter a valid email"></input>
                    </div>
                    <div class="name">
                        <label>Name</label>
                        <input type="text" class="in na" placeholder="Enter your Name"></input>
                    </div>
                    </div>
                    <input type="submit" class="submit"></input>
                </form>
                </div>
                <div class="social">
                    <div class="card">
                        <a href="#"><img src="../images/Facebook_LOGO.png"></a>
                        <h3>Facebook</h3>
                    </div>

                    <div class="card">
                       <a href="#"><img src="../icones/EpPhone.png"></a>
                        <h3>+201030403068</h3>
                    </div>

                    <div class="card">
                        <a href="#"><img src="../images/m.png"></a>
                        <h3>Email</h3>
                    </div>
                </div>
            </div>
            `;
            document.getElementById('contact').innerHTML = elementForm;
