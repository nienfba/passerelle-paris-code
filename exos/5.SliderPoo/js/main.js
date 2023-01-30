
const images = [
    { src: 'images/1.jpg', title: 'A link to the Past' },
    { src: 'images/2.jpg', title: 'Twilight princess' },
    { src: 'images/3.jpg', title: 'Skyward Sword' },
    { src: 'images/4.jpg', title: 'WindWaker' },
    { src: 'images/5.jpg', title: 'Breath of the wild' },
    { src: 'images/6.jpg', title: 'Link\'s awakening' },
    { src: 'images/7.jpg', title: 'Tears of the kingdom' } //erreur
];

const slider = new Slider({
    images: images,
    area: document.querySelector('div.slider'),
    with:'100%',
    height:'100%'
});


const images2 = [
    { src: 'images/lotr1.jpg', title: 'Fondcombe' },
    { src: 'images/0.jpg', title: 'AAAAAAAAAAAA' }, //erreur
    { src: 'images/lotr2.jpg', title: 'Fondcombe' },
    { src: 'images/lotr3.jpg', title: 'Gandalf' },
    { src: 'images/lotr4.jpg', title: 'Balrog' }, //erreur
    { src: 'images/9.jpg', title: 'AAAAAAAAAAAA' } //erreur
];


const slider2 = new SliderPlay({
    images: images2,
    area: document.querySelector('div.slider2')
});


const images3 = [
    { src: 'images/a1.jpg', title: 'Avatar 2' },
    { src: 'images/0.jpg', title: 'AAAAAAAAAAAA' }, //erreur
    { src: 'images/a2.jpg', title: 'Avatar 2' },
    { src: 'images/a3.jpg', title: 'Avatar 2' },
    { src: 'images/a4.jpg', title: 'Avatar 2' }, //erreur
    { src: 'images/9.jpg', title: 'AAAAAAAAAAAA' } //erreur
];


const slider3 = new SliderPlay({
    images: images3,
    area: document.querySelector('div.slider3')
});