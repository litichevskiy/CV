!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(4)},function(e,n,t){const i=t(2),r=t(3);document.querySelector(".cv-container").innerHTML=r(i)},function(e,n){e.exports={user:{firstName:"Литичевский",lastName:"Александр",position:"Frontend Developer"},"experience​":[{company:"freelance",dateStart:"ноябрь 2017",dateEnd:"настоящее время",position:"Frontend Developer",description:["различные проекты, защищенные NDA"]},{company:"limestone Digital",dateStart:"август 2017",dateEnd:"ноябрь 2017",position:"Frontend Developer",description:["Разработка и поддержка интернет-магазина косметики","Адаптивная верстка.","Реализованы новые компоненты в устаревшей кодовой базе."]},{company:"socsecret",dateStart:"октябрь 2016",dateEnd:"август 2017",position:"Frontend Developer",description:["Разработка пользовательского интерфейса для сервиса по увеличению популярности в Instagram.","Реализована маршрутизация на стороне клиента.","Добавлена поддержка мультиязычности, которая не требует перезагрузки страницы.","Снижение связанности устаревшего кода модульным подходом.","Создание интерфейса администратора для внутренних проектов компании."]},{company:"Roomtodo",dateStart:"апрель 2016",dateEnd:"июнь 2016",position:"Junior Frontend Developer",description:["Принимал участие в разработке интерфейса для онлайн дизайна интерьера.","Элементы интерфейса реализованы на чистом Javascript, HTML и CSS без фреймворков.","Для уменьшения связанности компонентов использовал шаблон Publisher / Subscriber."]}],petProjects:[{name:"Weather Forecast Application",shortDescription:"Progressive Web App",description:["Использовал service worker для кэширования данных приложения.","Реализовал взаимодействие со сторонними API, защищенными OAuth."],link:{github:"https://github.com/litichevskiy/weather"}},{name:"ankoku-toshi-jutsu",shortDescription:"",description:["Визуальная копия рекламного сайта, написанная для изучения React и Flux."],link:{github:"https://github.com/litichevskiy/example-ankoku-toshi-jutsu"}}],contacts:[{key:"email",user:"​litichevskiyalexandr@gmail.com",path:"mailto:​litichevskiyalexandr@gmail.com",picture:["images/gmail.webp","src/images/gmail.png"]},{key:"skype",user:"litichevskiy",path:"skype:litichevskiy?chat",picture:["images/skype.webp","src/images/skype.png"]}]}},function(e,n){function t(e){return e.reduce((e,n)=>e+=`\n    <li class="description">\n    <span class="circle"></span>\n    ${n}\n    </li>`,"")}e.exports=function(e){return`\n  <h4 class="header-large">${e.user.firstName} ${e.user.lastName}</h4>\n  <h4 class="header-large">${e.user.position}</h4>\n  <ul>\n  <li>\n  <h4 class="header-medium">Experience</h4>\n  ${function(e){return e.reduce((e,n)=>e+=`\n    <ul>\n    <li>\n    <h4 class="header-small">\n    ${n.company}\n    <time>${n.dateStart} - ${n.dateEnd}</time>\n    <small>${n.position}</small>\n    </h4>\n    </li>\n    ${t(n.description)}\n    </ul>\n    `,"")}(e["experience​"])}\n  </li>\n  <li>\n  <h4 class="header-medium">Pet projects</h4>\n  ${function(e){return e.reduce((e,n)=>e+=`\n    <ul>\n    <li>\n    <h4 class="header-small">\n    ${n.name}\n    <small>${n.shortDescription}</small>\n    </h4>\n    <span>github:</span>\n    <a target="_blank" class="link-to-project" href=${n.link.github}>${n.link.github}</a>\n    </li>\n    ${t(n.description)}\n    </ul>\n    `,"")}(e.petProjects)}\n  </li>\n  <li>\n  <h4 class="header-medium">contacts</h4>\n  <ul>\n  ${function(e){return e.reduce((e,n)=>e+=`\n    <li>\n    <small>${n.key}:</small>\n    <small>${n.user}</small>\n    <div class="wrapper-link-send-message">\n    <a href=${n.path}>\n    <picture>\n    <source srcset='${n.picture[0]}' type="image/webp">\n    <img class="send-message-img" src='${n.picture[1]}' alt="send message">\n    </picture>\n    </a>\n    </div>\n    </li>`,"")}(e.contacts)}\n  </ul>\n  </li>\n  </ul>`}},function(e,n){}]);