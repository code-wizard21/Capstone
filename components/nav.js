

// yo can find css for these footer file here="style/footer.css".
// you have to simply link that stylesheet in your heading part
// for these file make one footer with id="footer" and make innerHtml for imported function
function nav()
{
    return `
    <div id="explorenavbar">

    <div id="logodiv" >
        <img id="logo" src="https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png" alt="playo logo">
    </div>

    <div id="nav2div"> 
        <img id="pplogo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPrvTQk7ichN8Ohn0iWQSiXNnSXQucnepFipS6ZzJ1QF1hNM3i3JhU58z0gJhJMFIP9shnXHCpjPyb5pKAz66XPo9hzZy1ICt-ZAiiRLxCySsjcXtDmVM0uQ3ysM_f-oUmCM3zHiQUmLpve9H98hkSHERaKuyqUxqkE1PIO-MJ5zecRXkBtSSL3QKPZmTo/s1600/user.png" alt="">
        <p id="myBtn" class="loginp">Login/Signup</p>
        <img id="dropdownarrow" src="https://playo-website.gumlet.net/playo_functional/Icons/arrow_light.svg" alt="arrow">
    </div>

   

    <!--    popupwindow -->
    <!-- Otp Pop UP -->
    
    <div id="otpPopup" style="display: none;">OTP: <span id="otpValue"></span></div>

    <div id="modal_container">

        <div id="modal">
            <img id="close" src="https://playo-website.gumlet.net/playo_functional/Icons/closeButton.svg" alt="">

            <div id="login_left_div">
                <img width="100%" src="https://playo-website.gumlet.net/icons/login-graphics.png?auto=compress,format" alt="">
            </div>
            <div id="login_right_div">
                <p id="entermobile">Enter Your Mobile Number</p>

                <div id="user_phone_div">
                    <div>
                        <div id="countrySpan">
                            <span>
                                <div id="selectCallingCode">
                                    <span style="font-size: 14px; color: #424242;" id="rem1">IND</span>
                                    <span style="font-size: 14px; color: #424242;" id="rem2">+91</span>
                                    <img id="countryDrop" src="https://s3.ap-south-1.amazonaws.com/playo-website/booking/selectCountry.svg" alt="dropdown">
                                </div>
                            </span>
                        </div>
                    </div>
                    <span>
                        <input id="input" type="number" placeholder="Mobile Number *" value="">
                        <hr style="margin-top: -1px; margin-left: -65%; width: 220%;">
                    </span>
                    
                </div>

                <button id="sendOTP" style="font-size: 1em;">SEND OTP</button>
                <button id="giveOTP"  style="font-size: 1em;" >Enter OTP</button>
                <button id="resendOTP"  style="font-size: 1em;" >Resend OTP</button>
            </div>
        </div>
    </div>

</div>
    `
}

export default nav


