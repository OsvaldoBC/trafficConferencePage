let speakersData = [{
  name: 'Tonic',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  technologies: ['html', 'css', 'javaScript'],
  image:  './src/images/speaker1.jpg',
},
  {
  name: 'Multi-Post-Stories',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  technologies: ['html', 'css', 'javaScript'],
  image:  './src/images/speaker2.jpg',
},
    {
  name: 'Tonic',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  technologies: ['html', 'css', 'javaScript'],
  image:  './src/images/speaker3.jpg',
},
  {
  name: 'Multi-Post-Stories',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  technologies: ['html', 'css', 'javaScript'],
  image:  './src/images/speaker4.jpg',

},
];

// fill dynamic mobile version"

for (let i = 0; i < speakersData.length; i++) {
  console.log(speakersData [i]);
  let card1 = document.createElement('div');
  card1.classList.add('container1');

  let portfolio = document.createElement('div');
  portfolio.classList.add('portfolio');

  let contenido1 = document.createElement('div');
  contenido1.classList.add('contenido1');

  let cardh2 = document.createElement('h2');
  cardh2.classList.add('tonic');
  cardh2.textContent = speakersData [i].name;
  contenido1.appendChild(cardh2);

  const buttons = document.createElement('ul');
  buttons.classList.add('buttons');

  for (let u = 0; u < speakersData [i].technologies.length; u += 1) {
    const tagLi = document.createElement('li');
    tagLi.classList.add('int-button');
    tagLi.textContent = speakersData [i].technologies[u];

    buttons.appendChild(tagLi);
  }

  const info = document.createElement('ul');
  info.classList.add('info');

  for (let u1 = 0; u1 < speakersData [i].company.length; u1 += 1) {
    const tagLi1 = document.createElement('li');
    tagLi1.classList.add('tonic-detail2');
    tagLi1.textContent = speakersData [i].company[u1];
    info.appendChild(tagLi1);
  }

  let cardp = document.createElement('p');
  cardp.classList.add('project-detail');
  cardp.textContent = speakersData [i].description;

  let image = document.createElement('img');
  image.src = speakersData [i].image;
  image.alt = 'imagen';

  const button = document.createElement('button');
  button.classList.add('see');
  button.setAttribute('type', 'button');
  const butText = document.createTextNode('See Project');
  button.appendChild(butText);

  portfolio.appendChild(image);
  contenido1.appendChild(info);
  contenido1.appendChild(cardp);
  card1.appendChild(portfolio);
  card1.appendChild(contenido1);
  contenido1.appendChild(buttons);
  contenido1.appendChild(button);

  document.querySelector('.containerobj').appendChild(card1);
}
