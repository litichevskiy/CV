function createCv( cv ) {
  return `
  <h4 class="header-large">${cv.user.firstName} ${cv.user.lastName}</h4>
  <h4 class="header-large">${cv.user.position}</h4>
  <ul>
  <li>
  <h4 class="header-medium">Experience:</h4>
  ${templateExperiens(cv['experience​'])}
  </li>
  <li>
  <h4 class="header-medium">Pet projects:</h4>
  ${templatePetProject(cv['petProjects'])}
  </li>
  <li>
  <h4 class="header-medium">contacts:</h4>
  <ul>
  ${templateContacts(cv['contacts'])}
  </ul>
  </li>
  </ul>`;
};

function templateContacts( listСontacts ) {
  return listСontacts.reduce((accumulator, contact) => {
    accumulator += `
    <li>
    <small>${contact.key}:</small>
    <small>${contact.user}</small>
    <div class="wrapper-link-send-message">
    <a href=${contact.path}>
    <picture>
    <source srcset='${contact.picture[0]}' type="image/webp">
    <img class="send-message-img" src='${contact.picture[1]}' alt="send message">
    </picture>
    </a>
    </div>
    </li>`;
    return accumulator;
  },'');
};

function templatePetProject( projectList ) {
  return projectList.reduce((accumulator, project) => {
    accumulator += `
    <ul>
    <li>
    <h4 class="header-small">
    ${project.name}
    <small>${project.shortDescription}</small>
    </h4>
    <span>github:</span>
    <a target="_blank" class="link-to-project" href=${project.link.github}>${project.link.github}</a>
    </li>
    ${templateItemList(project['description'])}
    </ul>
    `;
    return accumulator;
  },'');
}

function templateExperiens( experiensList ) {
  return experiensList.reduce((accumulator, currentValue) => {
    accumulator += `
    <ul>
    <li>
    <h4 class="header-small">
    ${currentValue.company}
    <time>${currentValue.dateStart} - ${currentValue.dateEnd}</time>
    <small>${currentValue.position}</small>
    </h4>
    </li>
    ${templateItemList(currentValue['description'])}
    </ul>
    `;
    return accumulator;
  },'');
};

function templateItemList( list ){
  return list.reduce(( accumulator, currentValue ) =>{
    accumulator += `
    <li class="description">
    <span class="circle"></span>
    ${currentValue}
    </li>`;
    return accumulator;
  },'')
};

module.exports = createCv;