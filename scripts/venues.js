//Login and pop up full functionalities start
let Guser = localStorage.getItem("Glogin");
document.querySelector("#myBtn").textContent = Guser;

document.querySelector("#logo").addEventListener("click", () => {
  window.location.href = "index.html";
});

// navbar popup functionality
document.querySelector("#giveOTP").style.visibility = "hidden";
document.querySelector("#resendOTP").style.visibility = "hidden";

const open = document.getElementById("nav2div");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

//If user is logged in
login();

function login() {
  console.log("test");
  let loginStatus = localStorage.getItem("login");
  console.log(typeof loginStatus);
  if (loginStatus === "true") {
    let ph = localStorage.getItem("mobileNumber");
    console.log(ph);
    document.querySelector("#myBtn").textContent = ph;
    open.addEventListener("click", () => {
      modal_container.classList.remove("show");
      window.location.href = "login_profile.html";
    });
  } else {
    return false;
  }
}

// Function for Random OTP.

function generateOTP() {
  var otpGen = "";
  for (var i = 0; i < 6; i++) {
    otpGen += Math.floor(Math.random() * 10);
  }
  return otpGen;
}

let otp;
console.log(otp);
function showPopupWithOTP() {
  var popup = document.getElementById("otpPopup");
  var otpValue = document.getElementById("otpValue");

  otpValue.textContent = otp;
  popup.style.display = "block";

  setTimeout(function () {
    popup.style.display = "none";
  }, 3000);
}

//   var otpButton = document.getElementById("otpButton");
//   otpButton.addEventListener("click", showPopupWithOTP);

//When user add mobile number to it
document.querySelector("#sendOTP").addEventListener("click", () => {
  let mobNo = document.querySelector("#input").value;
  if (mobNo.length != 10) {
    alert("Please Give correct Mobile Number");
  } else {
    localStorage.setItem("mobileNumber", mobNo);
    document.querySelector(
      "#entermobile"
    ).textContent = `We have sent an OTP to ${mobNo}`;
    document.querySelector("#rem1").style.visibility = "hidden";
    document.querySelector("#rem2").style.visibility = "hidden";
    document.querySelector("#countryDrop").style.visibility = "hidden";
    document.querySelector("#input").value = null;
    document.querySelector("#input").placeholder = "Enter OTP";
    document.querySelector("input").style.textAlign = "center";
    document.querySelector("#sendOTP").style.visibility = "hidden";
    document.querySelector("#giveOTP").style.visibility = "visible";
    document.querySelector("#resendOTP").style.visibility = "visible";
    otp = generateOTP();
    showPopupWithOTP();
    let resend = document.querySelector("#resendOTP");
    resend.addEventListener("click", () => {
      otp = generateOTP();
      showPopupWithOTP();
    });
    document.querySelector("#giveOTP").addEventListener("click", () => {
      let entered_otp = document.querySelector("input").value;
      if (entered_otp == otp) {
        // alert("success");
        modal_container.classList.remove("show");
        document.querySelector("#myBtn").textContent = mobNo;
        localStorage.setItem("login", true);

        open.addEventListener("click", () => {
          modal_container.classList.remove("show");
          window.location.href = "login_profile.html";
          login();
        });
      } else {
        alert("Wrong OTP");
        document.querySelector(
          "#entermobile"
        ).textContent = `Enter Your mobile number`;
        document.querySelector("#rem1").style.visibility = "visible";
        document.querySelector("#rem2").style.visibility = "visible";
        document.querySelector("#countryDrop").style.visibility = "visible";
        document.querySelector("#input").value = null;
        document.querySelector("#input").placeholder = "Enter Mobile Number";
        document.querySelector("#sendOTP").style.visibility = "visible";
        document.querySelector("#giveOTP").style.visibility = "hidden";
        document.querySelector("#resendOTP").style.visibility = "hidden";
      }
    });
  }
});


let inputTag = document.querySelector("#search");
let showDiv = document.querySelector("#show-results-div");


//===========================================================================>

//Creating Debouncing Function
let id;

const debounce = () => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    main();
  }, 500);
};
// searchURL+'&query='+searchTerm
const main = async () => {
  try {
    let searchInput = document.getElementById("search").value;
    let response = await fetch(`https://ill-pear-toad-yoke.cyclic.app/cities?q=${searchInput}`);
    let data = await response.json();
    apprndData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

function apprndData(data) {
  document.querySelector("#show-results-div").innerHTML = "";

  if (data.length >= 1) {
    //Map Data
    data.map((el) => {
      document.querySelector("#show-results-div").style.visibility = "visible";

      //Destructuring of objects
      let { location, name } = el;
      console.log(location);

      //Creating Elements
      let mainDiv = document.createElement("div");
      mainDiv.setAttribute("class", "debouncediv");
      let img = document.createElement("img");
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");

      let imgsrc = `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd6CksdH734W00e_xKzuBe4V5czKsSqFaGuXclGGTo3Am8IhuCCqem9pJmG44w7HbErh8CsQM2CRpTnxFOTWG9tziu9tJQZ7vf1VM-jabnEFtdqT2lBvBBKGcERx9cVheeeAr3BTX95TzPiQgytQSRW6L0TmLlUI-TvKnG5VnrCTybTcNT0fuzVOVVOqjs/s512/location.png`;

      //set value to it
      img.src = imgsrc;
      span1.textContent = location;
      span2.textContent = name;

      //Append data
      mainDiv.append(img, span1, span2);
      document.querySelector("#show-results-div").append(mainDiv);

      mainDiv.addEventListener("click", () => {
        window.location.href = "venueDetail.html";

        let arr = [];
        arr.push(el);
        localStorage.setItem("venueDetails", JSON.stringify(arr));
      });
    });

    inputTag.addEventListener("keypress", (event) => {
       
      if (event.key == "Enter") {
        window.location.href = "venueDetails.html";
        localStorage.setItem("venueDetails", JSON.stringify(data));
      }
    });
  }
}

//Filtering array of objects from the data base End (With Debouncing Feature)
