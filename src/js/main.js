let speakersData = [{
  name: 'Yochai Benkler',
  company: 'Professor at Harvard Law School',
  description: 'Focusing on a collaborative approach in a networked environment.',
  image:  './src/images/speaker_01.png',
},
  {
  name: 'Kilnam Chon',
  company: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
  description: 'Focusing on a collaborative approach in a networked environment.',
  image:  './src/images/speaker_02.png',
},
    {
  name: 'Sohyeong Noh',
  company: 'Art Center Nabi Director, CC Korea Director',
  description: 'Focusing on a collaborative approach in a networked environment.',
  image:  './src/images/speaker_03.png',
},
  {
  name: 'Julia Leda',
  company: 'Head of the Young Pirates of Europe',
  description: 'Focusing on a collaborative approach in a networked environment.',
  image:  './src/images/speaker_04.png',
},
];

// fill dynamic mobile version"  //

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

  let company = document.createElement('h2');
  company.classList.add('company');
  company.textContent = speakersData [i].company;
  contenido1.appendChild(company);

  let cardp = document.createElement('p');
  cardp.classList.add('project-detail');
  cardp.textContent = speakersData [i].description;

  let image = document.createElement('img');
  image.src = speakersData [i].image;
  image.alt = 'imagen';

  portfolio.appendChild(image);
  contenido1.appendChild(cardp);
  card1.appendChild(portfolio);
  card1.appendChild(contenido1);

  document.querySelector('.containerobj').appendChild(card1);
}
