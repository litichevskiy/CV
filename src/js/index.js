const cv = require('../../cv_ru.json');
const createCv = require('./createCv');
const cv_container = document.querySelector('.cv-container');
cv_container.innerHTML = createCv( cv );