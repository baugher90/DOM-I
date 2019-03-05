const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "mainContent": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//=============================================================================Nav
//-----------------------------Logo
const logo = document.getElementById(`logo-img`).src = siteContent.nav[`img-src`];
console.log(logo);
//-----------------------------Navigation
const nav = document.querySelectorAll(`a`);
nav.forEach((e, i) => (e.textContent = siteContent.nav[`nav-item-${i + 1}`]));
console.log(nav);
//=============================================================================Landing Content
//-----------------------------Header
const h1Cont = document.querySelector(`h1`).innerText = siteContent[`cta`][`h1`];
console.log(h1Cont);
//-----------------------------Button
const codeImg = document.getElementById(`cta-img`).src = siteContent[`cta`][`img-src`];
console.log(codeImg);
//-----------------------------Img
const topButton = (document.querySelector(`button`).textContent = siteContent[`cta`][`button`]);
console.log(topButton);
//=============================================================================Main Content
//-----------------------------Img
const codeImg2 = (document.getElementById(`middle-img`).src = siteContent.mainContent[`middle-img-src`]);
console.log(codeImg2);
//-----------------------------Headers
const mainContent = document.querySelectorAll(`h4`);
mainContent.forEach((e, i) => (e.textContent = siteContent.mainContent[`${i}-h4`]));
console.log(mainContent);
//-----------------------------Upper Headers
mainContent[0].textContent = siteContent.mainContent[`features-h4`];
mainContent[1].textContent = siteContent.mainContent[`about-h4`];
//-----------------------------lower Headers
mainContent[2].textContent = siteContent.mainContent[`services-h4`];
mainContent[3].textContent = siteContent.mainContent[`product-h4`];
mainContent[4].textContent = siteContent.mainContent[`vision-h4`];

//-----------------------------Content
const mainText = document.querySelectorAll(`p`);
console.log(mainText);
//-----------------------------Upper Content
mainText[0].textContent = siteContent.mainContent[`features-content`];
mainText[1].textContent = siteContent.mainContent[`about-content`];
//-----------------------------lower Content
mainText[2].textContent = siteContent.mainContent[`services-content`];
mainText[3].textContent = siteContent.mainContent[`product-content`];
mainText[4].textContent = siteContent.mainContent[`vision-content`];

//=============================================================================Contact information
//-----------------------------
mainContent[5].textContent = siteContent.contact[`contact-h4`];
//-----------------------------
mainText[5].textContent = siteContent.contact[`address`];
//-----------------------------
mainText[6].textContent = siteContent.contact[`phone`];
//-----------------------------
mainText[7].textContent = siteContent.contact[`email`];

//=============================================================================Footer
mainText[8].textContent = siteContent.footer[`copyright`];
//=============================================================================Additional Changes
//-----------------------------

let newItem = document.createElement('a');
newItem.textContent = `item 1`;
newItem.href = `#`;

let newItem2 = document.createElement('a');
newItem2.textContent = `item 2`;
newItem2.href = `#`;

const secondNav = document.querySelector(`nav`);

secondNav.append(newItem);
secondNav.prepend(newItem2);


//-----------------------------
const greenNav = nav.forEach(function(link) {
  link.style.color = "green"
});
console.log(greenNav);
//-----------------------------
//=============================================================================Stretch Goals
//-----------------------------
const redText = mainText.forEach(function(link) {
  link.style.color = "red"
});
mainText[5].style.color = "blue";
mainText[6].style.color = "blue";
mainText[7].style.color = "blue";
//-----------------------------
//-----------------------------
