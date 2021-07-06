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
  "main-content": {
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const header = document.querySelector("nav");
const topTitle = document.querySelectorAll('.main-content .top-content h4')
const topText = document.querySelectorAll('.main-content .top-content p');
const bottomTitle = document.querySelectorAll('.main-content .bottom-content h4');
const bottomText = document.querySelectorAll('.main-content .bottom-content p');
const contactTitle = document.querySelector('.contact h4');
const contactText = document.querySelectorAll('.contact p');
const footer = document.querySelector("footer p");

// Example: Update the img src for the logo
// Add images
let logo = document.querySelector('#logo-img')
logo.setAttribute('src', siteContent["nav"]["img-src"])

const bigCircle = document.querySelector('#cta-img');
bigCircle.setAttribute('src', siteContent['cta']['img-src']);

const banner = document.querySelector('#middle-img');
banner.setAttribute('src', siteContent['main-content']['middle-img-src']);


// #### NAV section ####
const links = document.querySelectorAll("header nav a");
links.forEach((link, index) => link.textContent = siteContent.nav[`nav-item-${index + 1}`]);

// Add new content 
// Change the color of the navigation text to be green.
links.forEach(function(element){
  element.style.color = "green";
})

// Add two new items to the navigation system
const link1 = document.createElement("a");
link1.textContent = "Gold ";
link1.style.color = "gold";
header.append(link1);

const link2 = document.createElement("a");
link2.textContent = "Red ";
link2.style.color = "Red";
header.prepend(link2);


// #### CTA Section ####
// Title
const mainTitle = document.querySelector("h1");
mainTitle.innerHTML = "DOM <br> IS<br>AWESOME";

// Button
const mainButton = document.querySelector(".cta-text button");
mainButton.textContent = siteContent["cta"]["button"];


// #### Main Content ####
// Top Section
// Titles
topTitle[0].textContent=siteContent['main-content']['features-h4'];
topTitle[1].textContent=siteContent['main-content']['about-h4'];

// Paragraphs
topText[0].textContent=siteContent['main-content']['features-content'];
topText[1].textContent=siteContent['main-content']['about-content'];


// Bottom Content
// Titles
bottomTitle[0].textContent = siteContent['main-content']['services-h4'];
bottomTitle[1].textContent = siteContent['main-content']['product-h4'];
bottomTitle[2].textContent = siteContent['main-content']['vision-h4'];

// Paragraphs
bottomText[0].textContent = siteContent['main-content']['services-content'];
bottomText[1].textContent = siteContent['main-content']['product-content'];
bottomText[2].textContent = siteContent['main-content']['vision-content'];


// #### Contact Section ####
// Title
contactTitle.textContent = siteContent['contact']['contact-h4'];

// link text
contactText[0].innerHTML = siteContent['contact']['address'];
contactText[1].innerHTML = siteContent['contact']['phone'];
contactText[2].innerHTML = siteContent['contact']['email'];


// #### Footer Section ####
// Copyright
footer.textContent = siteContent['footer']['copyright'];