'use strict';

const techImgArr = [
  "/img/tech/angular.png",
  "/img/tech/bower.png",
  "/img/tech/bootstrap.png",
  "/img/tech/browserify.png",
  "/img/tech/css3.png",
  "/img/tech/express.png",
  "/img/tech/firebase.png",
  "/img/tech/git.png",
  "/img/tech/github.png",
  "/img/tech/gulp.png",
  "/img/tech/html5.png",
  "/img/tech/jasmine.png",
  "/img/tech/jq2.png",
  "/img/tech/jslogo.png",
  "/img/tech/materialize.png",
  "/img/tech/mocha.png",
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

  $('.row').append(techImg)
}

const printStack = () => {
  techImgArr.forEach(buildPrint)
}

printStack()

//  modal logic -------------
const projectsArr = []

const Tradesies = {
  name: 'Tradesies',
  className: 'tradesies',
  mainImg: '../img/tradesies-mock.png',
  info: 'A gear-trading application for the restless musician.',
  img2: '../img/tradesies-community.png',
  url: '#',
  github: 'https://github.com/alexhortonmusic/tradesies/tree/master/wholeDangThing'
}

const SpaceRace = {
  name: 'Space Race',
  className: 'spaceRace',
  mainImg: '../img/space-mock.png',
  info: 'Space Race is a live-action multiplayer game, supporting multiple users and rooms. Built using technologies such as Node.js, Express, Socket.io, and Pug, Space Race is a game where 2-4 players race their ships to the moon.',
  img2: '../img/space-home.png',
  url: 'https://space-race-.herokuapp.com/',
  github: 'https://github.com/alexhortonmusic/space-race'
}

const Freddit = {
  name: 'Freddit',
  className: 'freddit',
  mainImg: '../img/freddit-mock.png',
  info: 'Freddit is a social news aggregator and rating site. In other words, a clone of the basic features of Reddit.',
  img2: '../img/freddit-comment.png',
  url: 'https://ancient-hamlet-94779.herokuapp.com/',
  github: 'https://github.com/alexhortonmusic/fake-reddit'
}

const Occam = {
  name: 'Occam',
  className: 'occam',
  mainImg: '../img/occam-mock.png',
  info: 'Kanban tool productivity web application for project organization. Allows users to create an account, create organization boards for different projects, and create different lists for each project.',
  img2: '../img/Board.png',
  url: 'https://occam-planner.herokuapp.com/',
  github: 'https://github.com/alexhortonmusic/occam'
}

projectsArr.push(Tradesies, SpaceRace, Freddit, Occam)

const projectHTMLArr = []
const projectModalArr = []

projectsArr.forEach((project, index) => {
  const clickableHTML = `
    <li class='modal ${project.className}'>
      <h2>${project.name}</h2>
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
      <img src="${project.mainImg}" alt="${project.name} Home Page"/>
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
  $(`.${name}`).featherlight(modal)
})
