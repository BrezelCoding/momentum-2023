'use strict';

const images = ['01.jpg', '02.jpg', '03.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.body.style;

background.backgroundImage = `url('img/${chosenImage}')`;
