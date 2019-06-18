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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let navigation = document.querySelectorAll('a');
// navigation.forEach(item => item.style.color = 'green');

let navItems = document.querySelector('nav').children;
navItems[0].textContent = siteContent['nav']['nav-item-1']
navItems[1].textContent = siteContent['nav']['nav-item-2']
navItems[2].textContent = siteContent['nav']['nav-item-3']
navItems[3].textContent = siteContent['nav']['nav-item-4']
navItems[4].textContent = siteContent['nav']['nav-item-5']
navItems[5].textContent = siteContent['nav']['nav-item-6']

let navParent = document.querySelector('nav');
let navChild = document.createElement('a');
navChild.textContent = "link1";
let newNavChild = document.createElement('a');
newNavChild.textContent = 'link2';
navParent.appendChild(navChild);
navParent.prepend(newNavChild);



let navigation = document.querySelectorAll('a');
navigation.forEach(item => item.style.color = 'green');

let banner = document.querySelector('h1');
banner.textContent = siteContent['cta']['h1'];


let bannerImg = document.getElementById('cta-img');
bannerImg.src = siteContent['cta']['img-src'];

let bannerBtn = document.querySelector('.cta-text button');
bannerBtn.textContent = siteContent['cta']['button'];

let h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
console.log(middleImg);

let p = document.querySelectorAll('p');
p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];


h4[5].textContent = siteContent['contact']['contact-h4'];
p[5].textContent = siteContent['contact']['address'];
p[6].textContent = siteContent['contact']['phone'];
p[7].textContent = siteContent['contact']['email'];


p[8].textContent = siteContent['footer']['copyright'];
