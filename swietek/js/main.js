var pageCounter = 1;
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');
console.log(btn);

// btn.addEventListener('click', function() {
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
//   ourRequest.onload = function() {
//     if (ourRequest.status >= 200 && ourRequest.status < 400) {
//       var ourData = JSON.parse(ourRequest.responseText);
//       renderHTML(ourData);
//     } else {
//       console.log('We connected to the server, but it returned an error.');
//     }
//   };

//   ourRequest.onerror = function() {
//     console.log('Connection error');
//   };

//   ourRequest.send();
//   pageCounter++;
//   if (pageCounter > 3) {
//     btn.classList.add('hide-me');
//   }
// });

function renderHTML(data) {
  var htmlString = '';

  for (i = 0; i < data.length; i++) {
    htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + ' that likes to eat ';

    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += ' and ' + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += ' and ' + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener(
  'click',
  function() {
    var isExpanded = hamburger.getAttribute('aria-expanded');
    console.log(isExpanded);
    if (isExpanded === 'false') {
      document.querySelector('.page-header').classList.add('nav-opened');
      hamburger.setAttribute('aria-expanded', 'true');
    } else {
      document.querySelector('.page-header').classList.remove('nav-opened');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  },
  false
);
hamburger.setAttribute('role', 'button');
hamburger.setAttribute('aria-controls', 'navigation');
hamburger.setAttribute('aria-expanded', 'false');
document.body.classList.add('js');

let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
  // relitere
  item.addEventListener('click', e => {
    let hashval = item.getAttribute('href');
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: 'smooth'
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}

console.log('a tutaj');

const backgroundImagesArr = new Array(
  'trip/dc.jpg',
  'trip/grandCanyon.jpg',
  'trip/route66.jpg',
  'trip/grandCanyon2.jpg',
  'trip/piknik.jpg',
  'trip/piknik2.jpg',
  'trip/riverwalk.jpg',
  'trip/dolly.jpg',
  'trip/nasa.jpg',
  'trip/NewMexico.jpg',
  'trip/NO2.jpg',
  'trip/horses.jpg',
  'trip/caves6.jpg',
  'trip/vegas.jpg'
);

let iterator = 0;

const collapses = document.querySelectorAll('.collapse');
for (const collapse of collapses) {
  collapse.style.backgroundImage = `url(${backgroundImagesArr[iterator++]})`;
  const base = collapse.firstElementChild;
  const button = base.children[1];

  const magicCol = collapse.lastElementChild;
  magicCol.setAttribute('aria-expanded', false);

  button.onclick = () => {
    magicCol.classList.toggle('discription-closed');
    const currentAriaState = magicCol.attributes['aria-expanded'].nodeValue;
    console.log(currentAriaState);
    magicCol.setAttribute('aria-expanded', currentAriaState === 'true' ? false : true);
  };
}
