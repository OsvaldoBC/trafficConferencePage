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
  card1.classList.add('speakerContainer');

  let speakerImage = document.createElement('div');
  speakerImage.classList.add('speakerImage');

  let speakers = document.createElement('div');
  speakers.classList.add('speakers');

  let speakerName = document.createElement('h2');
  speakerName.textContent = speakersData [i].name;
  speakerName.classList.add('speakerName');

  speakers.appendChild(speakerName);

  let company = document.createElement('h2');
  company.classList.add('speakerCompany');
  company.textContent = speakersData [i].company;

  speakers.appendChild(company);

  let description = document.createElement('p');
  description.classList.add('speakerDescription');
  description.textContent = speakersData [i].description;

  speakers.appendChild(description);

  let image = document.createElement('img');
  image.src = speakersData [i].image;
  image.alt = 'imagen';

  speakerImage.appendChild(image);

  card1.appendChild(speakerImage);
  card1.appendChild(speakers);

  document.querySelector('.speakerSection').appendChild(card1);
}
