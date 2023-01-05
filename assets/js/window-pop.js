const projectData = [
  {
    id: 0,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box-background.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './images/popup-desk.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },

  {
    id: 1,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: '../assets/images/box25.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './images/popup-desk.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },

  {
    id: 2,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box36.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './images/popup-desk.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },

  {
    id: 3,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box-background.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './images/popup-desk.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },
  {
    id: 4,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box25.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './images/popup-desk.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },

  {
    id: 5,
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './assets/images/box36.png',
    popupData: {
      title: 'Keeping track of hundreds of components',
      technologies: ['html', 'bootstrap', 'Ruby on Rail'],
      popImage: './images/popup-desk.png',
      description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      liveDemo: 'https://chibunduonyeje1.github.io/Portfolio-mobile/',
      source: 'https://github.com/chibunduonyeje1/Portfolio-mobile',
    },
  },
];

for (let i = 0; i < projectData.length; i += 1) {
  let techData = '';

  for (let j = 0; j < projectData[i].technologies.length; j += 1) {
    techData += `<li>${projectData[i].technologies[j]}</li>`;
  }

  const workSection = document.querySelector('.worktwo');
  const card = document.createElement('div');
  card.classList.add('card');
  workSection.append(card);
  card.innerHTML = `<img src="${projectData[i].image}" alt="">
    <div class="cardComponent">
        <h2>${projectData[i].title}</h2>
        <p>${projectData[i].description}</p>
        <ul class="stacktwo">${techData}</ul>
        <button type="button" class="worktwo-button">See Project</button>
    </div>`;
}
