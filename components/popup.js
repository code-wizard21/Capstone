function getpopup(){
    return `
    <!-- The Modal -->
    <div id="myModal" class="modal">
    
      <!-- Modal content -->
      <div class="modal-content">
    
        <span class="close">&times;</span>
        <div id="contbox">
              <div>
           <img src="https://i.ibb.co/2gPJ3nW/popupdiv-img.png" alt="">
            </div>
        <!-- <p>Some text in the Modal..</p> -->
        <form id="form">
            <div id="mobno">Enter your Mobile Number</div>
            <div id="indlogo"><img src="https://i.ibb.co/2PPBFdB/countrycode.png" alt=""></div>
            <input type="tel" id="mobnum" />
           <hr>
            
          
            <br />
           <a href="login.html"> <input id="btn" class="bbtn" type="submit" value="Send OTP" /></a>
          </form>
        </div>
    
      </div>
    
    </div>
    <div id="myModal1" class="modal">
    
        <!-- Modal content -->
        <div class="modal-content">
      
          <span class="close">&times;</span>
          <div id="contbox">
                <div>
             <img src="https://i.ibb.co/2gPJ3nW/popupdiv-img.png" alt="">
              </div>
          <!-- <p>Some text in the Modal..</p> -->
          <form id="form">
              <div id="otp">Enter your OTP</div>
              <!-- <div id="indlogo"><img src="https://i.ibb.co/2PPBFdB/countrycode.png" alt=""></div> -->
              <input type="tel" id="otpnum" />
             <hr>
              
            
              <br />
             <a href="login.html"> <input id="btn2" class="bbtn" type="submit" value="Verify" /></a>
            </form>
          </div>
      
        </div>
      
      </div>`
}
export default getpopup;