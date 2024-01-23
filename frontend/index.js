function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

//   Implement the buildNav function:

// It takes an array of objects as its argument, and returns a nav element.
// The array passed into the function contains the data needed to construct the nav.
// Each object in the array contains the data needed to construct a single anchor tag inside the nav.
// Each object contains href, textContent and title properties.
// See below an example of a return value of buildNav, depending on the data passed into it:

// <nav>
//   <a href="https://www.example.com" title="Go to the home page">Home</a>
//   <a href="https://www.example.com/about" title="Learn more about our company">About</a>
//   <a href="https://www.example.com/services" title="View our available services">Services</a>
//   <a href="https://www.example.com/blog" title="Read our latest blog posts">Blog</a>
//   <a href="https://www.example.com/contact" title="Get in touch with us">Contact</a>
// </nav>

  function buildNav(links) {
    //  ✨ do your magic here
    const myNav = document.createElement('nav')
    for (let i = 0; i < links.length; i++) {
      const link = document.createElement('a')
      link.href = links[i].href
      link.textContent = links[i].textContent
      link.title = links[i].title
      myNav.appendChild(link)
    }
    return myNav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

//   This task has two parts 2A and 2B:

// 2A is concerned with implementing a function buildLearnerCard that returns a single learner card.
// 2B is concerned with utilizing the function to create the learner cards and attaching them to the DOM.
// You will need to tackle 2A and 2B in parallel at the beginning:

// Begin 2A by stubbing out a simple card by returning a <div>WIP</div> element from buildLearnerCard.

// Switch to 2B and loop over the learners array of data.

// At each iteration of the loop, generate a learner card using buildLearnerCard:

// The first argument buildLearnerCard is the learner of interest in the current iteration of the loop.
// The second argument is the whole languages array.
// Also, at each iteration of the loop, you need to append the card to the section element inside the HTML.

// Reload Chrome and see all your "WIPs" rendering inside the section element, one per learner.

// Turn back to part 2A and implement the function so that the structure returned from it looks like the following example:

// <div class="learner-card">
//   <p>Kenneth Fisher</p>
//   <p>Learner ID: 24</p>
//   <p>Date of Birth: 1990-01-01</p>
//   <p>Favorite Language: Python</p>
// </div>
// ❗ Note that because of the styles applied in styles.css, some paragraphs will be hidden from view and you will have use Dev Tools to see them!

// To make the cards behave like the ones in the mock, inside buildLearnerCard add a listener for click events on the card that does the following:

// Adds the class name 'active' to the clicked div.learner-card.
// Removes the 'active' class name from any other card that has it, if any.


  function buildLearnerCard(learner, languages) {
    const card = document.createElement('div')
    card.classList.add('learner-card')

    const nameP = document.createElement('p')
    nameP.textContent = learner.fullName

    const idElement = document.createElement('p')
    idElement.textContent = `Learner ID: ${learner.id}`

    const dobP = document.createElement('p')
    dobP.textContent = `Date of Birth: ${learner.dateOfBirth}`

    const favLangP = document.createElement('p')
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage)
    favLangP.textContent = `Favorite Language: ${favLanguage.name}`;

    [nameP, idElement, dobP, favLangP].forEach(p => {
      card.appendChild(p)
    })

    card.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(card => {
      card.classList.remove('active')
      })
    card.classList.add('active')
  })

    return card 
}

    // const nameP = document.createElement('p')
    // nameP.textContent = learner.fullName

    // const dobP = document.createElement('p')
    // dobP.textContent = `Date of Birth: ${learner.dateOfBirth}`

    // const faveLangP = document.createElement('p')
    // const favLanguage 
    
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM
{
    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach (learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }


  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer')
    
    let companyInfoDiv = document.createElement('div')
    companyInfoDiv.classList.add('company-info')

    let companyNameP = document.createElement('p')
    companyNameP.classList.add('company-name')
    companyNameP.textContent = footerData.companyName

    let addressP = document.createElement('p')
    addressP.classList.add('address')
    addressP.textContent = footerData.address

    let contactEmailP = document.createElement('p')
    contactEmailP.classList.add('contact-email')
    contactEmailP.innerHTML = `Email: <a href=mailto:"${footerData.contactEmail}"> ${footerData.contactEmail}`

    companyInfoDiv.appendChild(companyNameP)
    companyInfoDiv.appendChild(addressP)
    companyInfoDiv.appendChild(contactEmailP)

    let socialMediaDiv = document.createElement('div')
    socialMediaDiv.classList.add('social-media')

    for (let platform in footerData.socialMedia) {
      let socialMediaLink = document.createElement('a')
      socialMediaLink.href = footerData.socialMedia[platform]
      socialMediaLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1)
      socialMediaDiv.appendChild(socialMediaLink)
    }

    let currentyear = new Date().getFullYear()
    let copyright = document.createElement('div')
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentyear}`

    footer.appendChild(companyInfoDiv) 
    footer.appendChild(socialMediaDiv)
    footer.appendChild(copyright)
    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  })) 

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic her
document.addEventListener('click', evt => {
  if (evt.target === document.querySelector('section')) {
    const learners = document.querySelectorAll('.learner-card')
    learners.forEach(card => card.classList.remove ('active'))
  }
})
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
