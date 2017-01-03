'use strict';

const techImgArr = [
  "/img/tech/angular.png",
  "/img/tech/bower.png",
  "/img/tech/browserify.png",
  "/img/tech/ember.png",
  "/img/tech/express.png",
  "/img/tech/git.png",
  "/img/tech/gulp.png",
  "/img/tech/mongo.png",
  "/img/tech/nodejs.png",
  "/img/tech/npm.png",
  "/img/tech/pugFace.png",
  "/img/tech/sass.png"
]

const buildPrint = (element, index) => {
  let techImg = `
    <div class='techImgBox'>
      <img src='${element}' class='techImg' />
    </div>
  `

  $('.techStack').append(techImg)
}

const printStack = () => {
  techImgArr.forEach(buildPrint)
}

printStack()

//  modal logic -------------
const projectsArr = []

const Occam = {
  name: 'Occam',
  className: 'occam',
  mainImg: '../img/occam-mock.png',
  info: 'Kanban productivity web application for project organization. Allows users to create an account, create organization boards for different projects, and create different lists for each project.',
  img1: '../img/Splash.png',
  img2: '../img/Board.png',
  url: 'https://occam-planner.herokuapp.com/',
  github: 'https://github.com/alexhortonmusic/occam',
  desc: 'Project management kanban tool'
}

const Tradesies = {
  name: 'Tradesies',
  className: 'tradesies',
  mainImg: '../img/tradesies-mock.png',
  info: 'A gear-trading application for the restless musician. Built with AngularJS and a Firebase back-end.',
  img1: '../img/tradesies-home.png',
  img2: '../img/tradesies-community.png',
  url: '#',
  github: 'https://github.com/alexhortonmusic/tradesies/tree/master/wholeDangThing',
  desc: 'A music gear trading web application'
}

const SpaceRace = {
  name: 'Space Race',
  className: 'spaceRace',
  mainImg: '../img/space-mock.png',
  info: 'Space Race is a live-action multiplayer game, supporting multiple users and rooms. Built using technologies such as Node.js, Express, Socket.io, and Pug, Space Race is a game where 2-4 players race their ships to the moon.',
  img1: '../img/space-game.png',
  img2: '../img/space-home.png',
  url: 'https://space-race-.herokuapp.com/',
  github: 'https://github.com/alexhortonmusic/space-race',
  desc: 'Multiplayer racing game'
}

const Freddit = {
  name: 'Freddit',
  className: 'freddit',
  mainImg: '../img/freddit-mock.png',
  info: 'Freddit is a social news aggregator and rating site. In other words, a clone of the basic features of Reddit.',
  img1: '../img/freddit-home.png',
  img2: '../img/freddit-comment.png',
  url: 'https://ancient-hamlet-94779.herokuapp.com/',
  github: 'https://github.com/alexhortonmusic/fake-reddit',
  desc: 'Basic Reddit Clone'
}

projectsArr.push(Occam, Tradesies, SpaceRace, Freddit)

const projectHTMLArr = []
const projectModalArr = []

projectsArr.forEach((project, index) => {
  const clickableHTML = `
    <li class='modal'>
      <h2 id='${project.className}'>${project.name}</h2>
      <p>${project.desc}</p>
      <div>
        <img class='singleProject' src="${project.mainImg}" alt="${project.name} screenshot">
      </div>
    </li>
  `
  const modalHTML = `
    <div id='${project.className}' class='modalPop'>
      <h2>${project.name}</h2>
      <p>${project.info}</p>
      <div class='links'>
        <a href='${project.url}'>Try it out!</a>
        <a href='${project.github}'>Check out the code</a>
      </div>
      <img src="${project.img1}" alt="${project.name} Home Page"/>
      <img src="${project.img2}" alt="${project.name} Second Page"/>
    </div>
  `
  projectHTMLArr.push(clickableHTML)
  projectModalArr.push({ name: `${project.className}`, modal: modalHTML})
})

// projects to DOM
projectHTMLArr.forEach((projectHTML) => {
  $('.galleryUl').append(projectHTML)
})

// build modals
projectModalArr.forEach(({ name, modal }) => {
  $(`#${name}`).featherlight(modal)
})
