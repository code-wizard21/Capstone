//Working on quotes api call==================>

let maxpage = 15;

var pageNo = 3;

let calledApi = 1;

let pageminus = document.getElementById("pminus");
let pageplus = document.getElementById("pplus");
let spage = document.getElementById("spage");
spage.textContent = pageNo;
pageminus.addEventListener("click", function () {
  if (pageNo == 1) {
    pageNo = maxpage;
  } else {
    pageNo--;
  }
  spage.textContent = pageNo;
  console.log(pageNo);
  if (calledApi == 1) {
    sportNews();
  } else if (calledApi == 2) {
    helthNews();
  } else if (calledApi == 3) {
    cricketNews();
  } else if (calledApi == 4) {
    footballNews();
  } else if (calledApi == 5) {
    tennisNews();
  }
});

pageplus.addEventListener("click", function () {
  if (pageNo == maxpage) {
    pageNo = 1;
  } else {
    pageNo++;
  }
  spage.textContent = pageNo;
  console.log(pageNo);
  if (calledApi == 1) {
    sportNews();
  } else if (calledApi == 2) {
    helthNews();
  } else if (calledApi == 3) {
    cricketNews();
  } else if (calledApi == 4) {
    footballNews();
  } else if (calledApi == 5) {
    tennisNews();
  }
});

console.log(pageNo);

sportNews();

document.querySelector("#first-blog").addEventListener("click", () => {
  window.open(
    "https://blog.playo.co/humansofplayo-how-to-submit-a-story/",
    "_blank"
  );
});

document.querySelector("#sec-blog").addEventListener("click", () => {
  window.open(
    "https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/",
    "_blank"
  );
});

// By Clicking static blog content End==================>

//Api call for Sports news content start==================>

// import appendNews from "../components/appendnews.js";

// Api call for Sports news content end==================>

//Api call for health news start==================>

document.querySelector("#health-news").addEventListener("click", function () {
  calledApi = 2;
  console.log(calledApi);
  helthNews();
});

async function helthNews() {
  document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
  // document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#health-news").style.backgroundColor = "white";

  let bloglink_health = `https://newsapi.org/v2/everything?q=workout&_limit=2&apiKey=e2bf3c96825d42e5ba28ac96294d886e&pageSize=6&page=${pageNo}`;

  try {
    let response = await fetch(bloglink_health);
    let data = await response.json();
    apprndData(data.articles);
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
}

//Api call for health news End ========================>

//If user click one sports button start ========================>

document.querySelector("#sports-news").addEventListener("click", () => {
  calledApi = 1;
  console.log(calledApi);
  sportNews();
});

async function sportNews() {
  // document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#sports-news").style.backgroundColor = "white";

  let bloglink_health = `https://newsapi.org/v2/everything?q=wwe&_limit=2&apiKey=e2bf3c96825d42e5ba28ac96294d886e&pageSize=6&page=${pageNo}`;

  try {
    let response = await fetch(bloglink_health);
    let data = await response.json();
    apprndData(data.articles);
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#cricket-news").addEventListener("click", () => {
  calledApi = 3;
  console.log(calledApi);
  cricketNews();
});

async function cricketNews() {
  document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
  // document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#cricket-news").style.backgroundColor = "white";

  let bloglink_health = `https://newsapi.org/v2/everything?q=cricket&_limit=2&apiKey=e2bf3c96825d42e5ba28ac96294d886e&pageSize=6&page=${pageNo}`;

  try {
    let response = await fetch(bloglink_health);
    let data = await response.json();
    apprndData(data.articles);
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#football-news").addEventListener("click", () => {
  calledApi = 4;
  console.log(calledApi);
  footballNews();
});

async function footballNews() {
  document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
  // document.querySelector("#football-news").style.borderBottom = "#F3F3F2";
  document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#football-news").style.backgroundColor = "white";

  let bloglink_health = `https://newsapi.org/v2/everything?q=football&_limit=2&apiKey=e2bf3c96825d42e5ba28ac96294d886e&pageSize=6&page=${pageNo}`;

  try {
    let response = await fetch(bloglink_health);
    let data = await response.json();
    apprndData(data.articles);
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#tennis-news").addEventListener("click", () => {
  calledApi = 5;
  console.log(calledApi);
  tennisNews();
});

async function tennisNews() {
  document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
  // document.querySelector("#tennis-news").style.borderBottom = "#F3F3F2";
  document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
  document.querySelector("#tennis-news").style.backgroundColor = "white";

  let bloglink_health = `https://newsapi.org/v2/everything?q=tennis&_limit=2&apiKey=e2bf3c96825d42e5ba28ac96294d886e&pageSize=6&page=${pageNo}`;

  try {
    let response = await fetch(bloglink_health);
    let data = await response.json();
    apprndData(data.articles);
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
}

//If user click one sports button end==========================>

//Search Feature in news api start================================>
let id;

const debounce = (func, delay) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    func();
  }, delay);
};

const main = async () => {
  try {
    let searchInput = document.getElementById("search").value;
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=e2bf3c96825d42e5ba28ac96294d886e&pageSize=6&page=10`
    );
    let data = await response.json();
    apprndData(data.articles);
    console.log(data);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
};

const inputElement = document.getElementById("search");
inputElement.addEventListener("input", () => {
  debounce(main, 500);
});

function apprndData(data) {
  let main = document.querySelector(".dynamic-news");
  main.innerHTML = "";
  //Map Data
  data.map((el) => {
    let imgm = document.createElement("img");
    imgm.setAttribute("class", "imgm");
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "div1");
    let div2 = document.createElement("h4");
    div2.setAttribute("class", "div2");
    let div3 = document.createElement("div");
    div3.setAttribute("class", "div3");
    let postLink = el.url;
    mainDiv.addEventListener("click", function () {
      window.open(`${postLink}`);
    });
    let div4 = document.createElement("div");
    div4.setAttribute("class", "div4");
    imgm.src = el.urlToImage;
    div2.textContent = el.title;
    div1.textContent = el.publishedAt;
    div3.textContent = el.content;

    //Append data

    div4.append(div1, div2);
    mainDiv.append(imgm, div4, div3);
    main.append(mainDiv);
  });
}

let Guser = localStorage.getItem("Glogin");
document.querySelector("#myBtn").textContent = Guser;
//Search Feature in news api End================================>
