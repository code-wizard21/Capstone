


    
//Login and pop up full functionalities start

document.querySelector("#logo").addEventListener("click", ()=>{
    window.location.href = "index.html";
})


// navbar popup functionality
document.querySelector("#giveOTP").style.visibility = "hidden";

const open = document.getElementById("nav2div");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", ()=>{
    modal_container.classList.add("show")
});

close.addEventListener("click", ()=>{
    modal_container.classList.remove("show")
});




//If user is logged in 
login()

function login(){
    console.log("test")
    let loginStatus = localStorage.getItem("login")
    console.log(typeof(loginStatus))
    if(loginStatus === "true"){
        let ph = localStorage.getItem("mobileNumber");
        console.log(ph)
        document.querySelector("#myBtn").textContent = ph;
        open.addEventListener("click", ()=>{
            modal_container.classList.remove("show")
            window.location.href = "login_profile.html";
        })
    
    }
    else{
        return false;
    }

}



//When user add mobile number to it
document.querySelector("#sendOTP").addEventListener("click", ()=>{
    let mobNo = document.querySelector("#input").value;
    if(mobNo.length != 10){
        alert("Please Give correct Mobile Number");
    }
    else{
        localStorage.setItem("mobileNumber", mobNo);
        // modal_container.style.visibility = "hidden";
        // document.querySelector(".loginp")
        document.querySelector("#entermobile").textContent = `We have sent an OTP to ${mobNo}`;
        document.querySelector("#rem1").style.visibility = "hidden";
        document.querySelector("#rem2").style.visibility = "hidden";
        document.querySelector("#countryDrop").style.visibility = "hidden";
        document.querySelector("#input").value = null;
        document.querySelector("#input").placeholder = "Enter OTP"
        document.querySelector("input").style.textAlign = "center";
        document.querySelector("#sendOTP").style.visibility = "hidden";
        document.querySelector("#giveOTP").style.visibility = "visible";

        document.querySelector("#giveOTP").addEventListener("click", ()=>{

            let otp = document.querySelector("input").value;
            if(otp == "123456"){
                // alert("success");
                modal_container.classList.remove("show")
                document.querySelector("#myBtn").textContent = mobNo;
                localStorage.setItem("login", true);


                open.addEventListener("click", ()=>{
                    modal_container.classList.remove("show")
                    window.location.href = "login_profile.html";
                    login()

                })


            }
            else{
                alert("Wrong OTP");
                document.querySelector("#entermobile").textContent = `Enter Your mobile number`;
                document.querySelector("#rem1").style.visibility = "visible";
                document.querySelector("#rem2").style.visibility = "visible";
                document.querySelector("#countryDrop").style.visibility = "visible";
                document.querySelector("#input").value = null;
                document.querySelector("#input").placeholder = "Enter Mobile Number"
                document.querySelector("#sendOTP").style.visibility = "visible";
                document.querySelector("#giveOTP").style.visibility = "hidden";

            }

        })
       
    }
})

//Login and pop up full functionalities end









//Add values to the html file
let data = JSON.parse(localStorage.getItem("singleVenueDetails"));
let { name : myName, imgUrl ,rating , filter_by} = data;
let category = filter_by[0];
let vote = localStorage.getItem("votes")
//console.log(data, category, vote)


//Select Elements and give value to it
document.querySelector("#cname").textContent = myName;
document.querySelector("#onlogoname").textContent = category;


//Redirect To Checkout 
// document.querySelector("#checkoutbutton").addEventListener("click", ()=>{
//     window.location.href = "pay.html";
// })











var cartobj={};
// these function for change bg color and font color logo and sport name
function sportlogo()
{
    let sportdiv= document.getElementById("sportlogodiv");
    sportdiv.style.backgroundColor="#4daa0b";

    let onlogoname= document.getElementById("onlogoname");
    onlogoname.style.color="white";

}

// these functions for the change color of day name and date div

function day1()
{
    let day1= document.getElementById("day1");
    day1.style.backgroundColor="#4daa0b";

    let d1= document.getElementById("d1");
    d1.style.color="white";

    let m1= document.getElementById("m1");
    m1.style.color="white";

}

function day2()
{
    let day2= document.getElementById("day2");
    day2.style.backgroundColor="#4daa0b";

    let d2= document.getElementById("d2");
    d2.style.color="white";

    let m2= document.getElementById("m2");
    m2.style.color="white";

}

function day3()
{
    let day3= document.getElementById("day3");
    day3.style.backgroundColor="#4daa0b";

    let d3= document.getElementById("d3");
    d3.style.color="white";

    let m3= document.getElementById("m3");
    m3.style.color="white";
}

function day4()
{
    let day4= document.getElementById("day4");
    day4.style.backgroundColor="#4daa0b";

    let d4= document.getElementById("d4");
    d4.style.color="white";

    let m4= document.getElementById("m4");
    m4.style.color="white";
}

function day5()
{
    let day5= document.getElementById("day5");
    day5.style.backgroundColor="#4daa0b";

    let d5= document.getElementById("d5");
    d5.style.color="white";

    let m5= document.getElementById("m5");
    m5.style.color="white";
}

function day6()
{
    let day6= document.getElementById("day6");
    day6.style.backgroundColor="#4daa0b";

    let d6= document.getElementById("d6");
    d6.style.color="white";

    let m6= document.getElementById("m6");
    m6.style.color="white";
}

function day7()
{
    let day7= document.getElementById("day7");
    day7.style.backgroundColor="#4daa0b";

    let d7= document.getElementById("d7");
    d7.style.color="white";

    let m7= document.getElementById("m7");
    m7.style.color="white";
}

function day8()
{
    let day8= document.getElementById("day8");
    day8.style.backgroundColor="#4daa0b";

    let d8= document.getElementById("d8");
    d8.style.color="white";

    let m8= document.getElementById("m8");
    m8.style.color="white";
}
// these functions for change bg color and font color of select start time block time divs
function time1()
{
    let time1=document.getElementById("time1");
    time1.style.backgroundColor="#4daa0b";
    time1.style.color="white";

}

function time2()
{
    let time2=document.getElementById("time2");
    time2.style.backgroundColor="#4daa0b";
    time2.style.color="white";
}

function time3()
{
    let time3=document.getElementById("time3");
    time3.style.backgroundColor="#4daa0b";
    time3.style.color="white";
}

function time4()
{
    let time4=document.getElementById("time4");
    time4.style.backgroundColor="#4daa0b";
    time4.style.color="white";
}

// these functions for  change bg color of small small time intervals
function t1()
{
    let t1=document.getElementById("t1");
    t1.style.backgroundColor="#4daa0b";
    t1.style.color="white";
}

function t2()
{
    let t2=document.getElementById("t2");
    t2.style.backgroundColor="#4daa0b";
    t2.style.color="white";
}

function t3()
{
    let t3=document.getElementById("t3");
    t3.style.backgroundColor="#4daa0b";
    t3.style.color="white";
}

function t4()
{
    let t4=document.getElementById("t4");
    t4.style.backgroundColor="#4daa0b";
    t4.style.color="white";
}

function t5()
{
    let t5=document.getElementById("t5");
    t5.style.backgroundColor="#4daa0b";
    t5.style.color="white";
}

function t6()
{
    let t6=document.getElementById("t6");
    t6.style.backgroundColor="#4daa0b";
    t6.style.color="white";
}

function t7()
{
    let t7=document.getElementById("t7");
    t7.style.backgroundColor="#4daa0b";
    t7.style.color="white";
}

function t8()
{
    let t8=document.getElementById("t8");
    t8.style.backgroundColor="#4daa0b";
    t8.style.color="white";
}

function t9()
{
    let t9=document.getElementById("t9");
    t9.style.backgroundColor="#4daa0b";
    t9.style.color="white";
}

function t10()
{
    let t10=document.getElementById("t10");
    t10.style.backgroundColor="#4daa0b";
    t10.style.color="white";
}

function t11()
{
    let t11=document.getElementById("t11");
    t11.style.backgroundColor="#4daa0b";
    t11.style.color="white";
}

function t12()
{
    let t12=document.getElementById("t12");
    t12.style.backgroundColor="#4daa0b";
    t12.style.color="white";
}

function t13()
{
    let t13=document.getElementById("t13");
    t13.style.backgroundColor="#4daa0b";
    t13.style.color="white";
}

function t14()
{
    let t14=document.getElementById("t14");
    t14.style.backgroundColor="#4daa0b";
    t14.style.color="white";
}

// below functions for the plus and minus features of duration
var count=1;
var costvalue;
function plus()
{
    count++;
    if(count >5){
        alert("We Dont offer More than 5 hrs");
        return false;
    }
    
    let plus= document.getElementById("plus");
    plus.style.backgroundColor = "#4daa0b";
    plus.style.color = "white";
    let minus= document.getElementById("minus");
     minus.style.backgroundColor = "white";
     minus.style.color = "grey"


    let updatedvalue= document.getElementById("timevalue");
    updatedvalue.innerHTML= count+ " "+ "hr";
    
    costvalue= count*2200;
    cost.innerHTML= "Total cost for these booking - INR"+" "+costvalue;

    return costvalue;
}

function minus(costvalue)
{
    
    
    if(count == 1){

        return false
    }
    count--;


    costvalue = 2200*count;
    let minus= document.getElementById("minus");
    minus.style.backgroundColor = "#4daa0b";
    minus.style.color = "white";
    let plus= document.getElementById("plus");
     plus.style.backgroundColor = "white";
     plus.style.color = "grey";

    let updatedvalue= document.getElementById("timevalue");
    updatedvalue.innerHTML= count+ " "+ "hr";

    cost.innerHTML= "Total cost for these booking - INR"+" " + costvalue;
    //let presentValue = costvalue;



}
// below functions for changing the bg color and color of court names
var cost= document.getElementById("cost");
function court1()
{
    let court1=document.getElementById("court1");
    court1.style.backgroundColor="#4daa0b";
    court1.style.color="white";

    cost.innerHTML="Total cost for these booking - INR"+" "+2200*count;

}

function court2()
{
    let court2=document.getElementById("court2");
    court2.style.backgroundColor="#4daa0b";
    court2.style.color="white";

    cost.innerHTML="Total cost for these booking - INR"+" "+2200*count;
}

function court3()
{
    let court3=document.getElementById("court3");
    court3.style.backgroundColor="#4daa0b";
    court3.style.color="white";

    cost.innerHTML="Total cost for these booking - INR"+" "+2200*count;
}

function court4()
{
    let court4=document.getElementById("court4");
    court4.style.backgroundColor="#4daa0b";
    court4.style.color="white";

    cost.innerHTML="Total cost for these booking - INR"+" "+2200*count;
}

function court5()
{
    let court5=document.getElementById("court5");
    court5.style.backgroundColor="#4daa0b";
    court5.style.color="white";

    cost.innerHTML="Total cost for these booking - INR"+" "+2200*count;
}

function court6()
{
    let court6=document.getElementById("court6");
    court6.style.backgroundColor="#4daa0b";
    court6.style.color="white";

    cost.innerHTML="Total cost for these booking - INR"+" "+2200*count;
}

function court7()
{
    let court7=document.getElementById("court7");
    court7.style.backgroundColor="#4daa0b";
    court7.style.color="white";

    cost.innerHTML="Total cost for these booking - INR"+" "+2200*count;
}

// these function for add elements to the cart
var emptydiv= document.getElementById("emptycart");
function addtocart()
{
    let mycart= document.getElementById("mycart");
    mycart.innerHTML= "MY CART (1)";
   let eptycart= document.getElementById("emptycart");
   eptycart.innerHTML="";

    // these is for create name of sport
   var sportname= document.createElement("div");
   sportname.id="sportname";
   sportname.textContent="Football";

    // these is for make court name
   var courtnamediv= document.createElement("div");
   courtnamediv.id="courtnamediv";
   var courtimage= document.createElement("img");
   courtimage.src="https://playo-website.gumlet.net/icons/court.svg";
   var courtname= document.createElement("p");
   courtname.textContent="6 a Side Court 1";
   courtnamediv.append(courtimage, courtname);

    // these is for make date and time div

    var timedatecartdiv = document.createElement("div");
    timedatecartdiv.id="timedatecartdiv";
    var datecart= document.createElement("div");
    datecart.id="datecart";
    
    var datecartimg= document.createElement("img");
    datecartimg.src = "https://playo-website.gumlet.net/icons/calendar.svg";
    var datename = document.createElement("p");
    datename.textContent= "22, January 2022";
    datecart.append(datecartimg, datename);

    var timecart= document.createElement("div");
    timecart.id="timecart";
    timedatecartdiv.append(datecart, timecart);
    var timecartimg = document.createElement("img");
    timecartimg.src="https://playo-website.gumlet.net/icons/clock.svg";
    var timename = document.createElement("p");
    timename.textContent= "06.00 PM to 07.00 PM";
    timecart.append(timecartimg, timename);

    // these is for making costdiv

    var costdiv= document.createElement("div");
    costdiv.id="costdiv";
    var costimg= document.createElement("img");
    costimg.src="https://playo-website.gumlet.net/icons/money.svg";
    var costname=document.createElement("p");
    costname.textContent=" INR "+" "+ count*2200;
    costdiv.append(costimg, costname);

    // these is for hr line under cost div

    let horizontal= document.createElement("div");
    horizontal.id="horizontal";

    // these is for checkout button and cost div

    let checkoutcostdiv= document.createElement("div");
    checkoutcostdiv.id="checkoutcostdiv";
    let pricegreendiv= document.createElement("div");
    pricegreendiv.id="pricegreendiv";
    pricegreendiv.textContent= "INR"+ " "+ count*2200; 

    let checkoutbutton= document.createElement("button");
    checkoutbutton.id="checkoutbutton";
    checkoutbutton.textContent="CHECKOUT";
    checkoutcostdiv.append(pricegreendiv, checkoutbutton)





   emptydiv.append(sportname, courtnamediv, timedatecartdiv, costdiv, horizontal,checkoutcostdiv);


   checkoutbutton.addEventListener("click", ()=>{


    let price = count*2200;
    localStorage.setItem("finalPrice", price);
    window.location.href = "pay.html";
   


   })

}


document.querySelector("#btn2").addEventListener("click", ()=>{
    let price1 = count*2200;
    localStorage.setItem("finalPrice", price1);
    window.location.href = "pay.html";
})

// these for import the footer

    // let foot= document.getElementById("footer");
    // import footer from "./components/footer.js";
    // foot.innerHTML=footer();