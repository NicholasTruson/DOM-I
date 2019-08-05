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

// Image of a code snippet

let img = document.getElementById("cta-img");
img.setAttribute('src', siteContent["cta"]["img-src"])

// Navigation

let navA = document.querySelectorAll('a')

navA[0].setAttribute('test', '.nav-item-1')
navA[0].text = 'Services'
navA[1].setAttribute('test', '.nav-item-2')
navA[1].text = 'Product'
navA[2].setAttribute('test', '.nav-item-3')
navA[2].text = 'Vision'
navA[3].setAttribute('test', '.nav-item-4')
navA[3].text = 'Features'
navA[4].setAttribute('test', '.nav-item-5')
navA[4].text = 'About'
navA[5].setAttribute('test', '.nav-item-6')
navA[5].text = 'Contact'

// Header

let mainHeader = document.querySelector('h1')
mainHeader.textContent = siteContent['cta']['h1']

let mainButton = document.querySelector('button')
mainButton.innerText = "Get Started"

let logo2 = document.querySelector("#cta-img")
logo2.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content

let heads = document.querySelectorAll('h4')

heads[0].setAttribute ('class', siteContent['main-content']['features-h4'])
heads[0].textContent = siteContent['main-content']['features-h4']
heads[1].setAttribute ('class', siteContent['main-content']['about-h4'])
heads[1].textContent = siteContent['main-content']['about-h4']
heads[2].setAttribute ('class', siteContent['main-content']['services-h4'])
heads[2].textContent = siteContent ['main-content']['services-h4']
heads[3].setAttribute ('class', siteContent['main-content']['vision-h4'])
heads[3].textContent = siteContent ['main-content']['vision-h4']
heads[4].setAttribute ('class', siteContent['main-content']['contact-h4'])
heads[4].textContent = siteContent ['main-content']['contact-h4']

let text = document.querySelectorAll('p');

text[0].setAttribute ('class', siteContent['main-content']['features-content'])
text[0].textContent = siteContent['main-content']['features-content']
text[1].setAttribute ('class', siteContent['main-content']['about-content'])
text[1].textContent = siteContent['main-content']['about-content']
text[2].setAttribute ('class', siteContent['main-content']['services-content'])
text[2].textContent = siteContent['main-content']['services-content']
text[3].setAttribute ('class', siteContent['main-content']['vision-content'])
text[3].textContent = siteContent['main-content']['vision-content']
text[4].setAttribute ('class', siteContent['main-content']['contact-content'])
text[4].textContent = siteContent['main-content']['contact-content']

// Middle Image

let midImg = document.querySelector("#middle-img")
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Contact

let contactInfo = document.querySelector('.contact')

contactInfo.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
contactInfo.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
contactInfo.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
contactInfo.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]

// Footer

let footer = document.querySelector('footer p')

footer.textContent = siteContent ["footer"]["copyright"]

// Navigation Color Change

navA.forEach(link => link.style.color = "green")

// New Navigation Items

const newNav1 = document.createElement('a')
const mainNav = document.querySelector('nav')
newNav1.innerText = 'Home'
newNav1.href = '#'
mainNav.prepend(newNav1)
newNav1.style.color = "green"

const newNav2 = document.createElement('a')
newNav2.innerText = 'Reviews'
newNav2.href = '#'
mainNav.append(newNav2)
newNav2.style.color = "green"