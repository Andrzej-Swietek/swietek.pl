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
  'trip/day1.jpg',
  'trip/day2.jpg',
  'trip/day3.jpg',
  'trip/day4.jpg',
  'trip/day5.jpg',
  'trip/day6.jpg',
  'trip/day7.jpg',
  'trip/day8.jpg',
  'trip/day9.jpg',
  'trip/day10.jpg',
  'trip/day11-3.jpg',
  'trip/day12.jpg',
  'trip/day13.jpg',
  'trip/day14.jpg',
  'trip/day15.jpg',
  'trip/day16.jpg',
  'trip/day17.jpg',
  'trip/day18.jpg',
  'trip/day19.jpg',
  'trip/day20.jpg',
  'trip/day21.jpg',
  'trip/day22.jpg',
   'trip/day23.jpg'
  // 'trip/day24.jpg',
  // 'trip/day25.jpg',
  // 'trip/day26.jpg'
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
