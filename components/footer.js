
// yo can find css for these footer file here="style/footer.css".
// you have to simply link that stylesheet in your heading part
// for these file make one footer with id="footer" and make innerHtml for imported function
function footer()
{
    return `<div id="infooter">
    <div id="div1">
        <div id="weblogo">
            <a href="index.html"><img src="https://playo-website.gumlet.net/logo/playo-logo-footer-website.png?auto=format,compress&h=100" alt="logo" width="100%" height="100%"></a>
        </div>
        <div id="playstore">
            <a href="https://play.google.com/store/apps/details?id=com.techmash.playo">
                <img src="https://playo-website.gumlet.net/icons/download-android.png?auto=format,compress " >
            </a>
            <a href="https://apps.apple.com/us/app/playo-local-sports-community/id1018786950?ls=1">
                <img src="https://playo-website.gumlet.net/icons/download-ios.png?auto=format,compress" >
            </a>
        </div>
        <div id="copyright">
            <p>©2022 TechMash Solutions Private Limited.<span> All Rights Reserved.</span></p>
        </div>
        <div id="loweritems">
            <a href="faq.html"><p>FAQs</p></a>
            <a href=""><p>Privacy POlicy</p></a>
            <a href=""><p>Terms Of Service</p></a>
            <a href=""><p>Cancellation & Refund Policy</p></a>
            <a href=""><p>Careers</p></a>
            <a href=""><p id="hiring">We're Hiring!</p></a>
        </div>
    </div>
    <div id="div2">
        <a href="about.html"><p>About Us</p></a>
        <a href="partner.html"><p>Partner With Us</p></a>
        <a href="brandact.html"><p>Brand Activations</p></a>
        <a href="corporate.html"><p>Corporate Offerings</p></a>
        <a href="contact.html"><p>contact Us</p></a>
    </div>
    <div id="div3">
        <a href="venues.html"><p>Book Venues</p></a>
        <a href="activities.html"><p>Activities</p></a>
        <a href="blog.html"><p>Blog</p></a>
        <a href="faq.html"><p>FAQ's</p></a>
    </div>
    <div id="div4">
        <a href="https://www.facebook.com/PlayoApp/"><p>Facebook</p></a>
        <a href="https://twitter.com/playoApp"><p>Twitter</p></a>
        <a href="https://www.instagram.com/playoapp/"><p>Instagram</p></a>
        <a href="https://www.linkedin.com/company/playo"><p>LinkdIn</p></a>
    </div>
</div>`
}

export default footer 