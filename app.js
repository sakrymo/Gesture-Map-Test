let gestureGridItems = document.querySelectorAll('.gesture-grid-item');
// console.log(gestureGridItems);

const log = console.log;
const gestureImages = document.querySelectorAll('.gesture-img');
const gestureIds = document.querySelectorAll('.gesture-id');
const gestureNames = document.querySelectorAll('.gesture-name');
const searchbar = document.querySelector('#searchbar');

function sort(v) {
  gestureGridItems.forEach(element => {
    element.textContent.includes(v) ?
      element.style.display = 'initial' : element.style.display = 'none';
  });
}

document.querySelectorAll('a').forEach(element => {
  element.addEventListener('click', (e) => {
    document.querySelectorAll('a').forEach(element => {
      element.classList.remove('active');
    })
    e.target.classList.add('active');
  });
})

searchbar.addEventListener('keyup', e => {
  gestureGridItems.forEach(element => {
    element.classList.remove('found');
    element.classList.remove('not-found');
    
    if (element.childNodes[7].textContent.toUpperCase().includes(searchbar.value.toUpperCase()) || element.childNodes[5].textContent.toUpperCase().includes(searchbar.value.toUpperCase())) {
      element.classList.add('found');
    } else {
      element.classList.add('not-found');
    }

    document.querySelectorAll('a').forEach(element => {element.classList.remove('active');});

    if (!searchbar.value) {
      element.classList.remove('found');
      element.classList.remove('not-found');
      element.style.display='';
      document.querySelector('a').classList.add('active');
    }
  });
});

gestureIds.forEach(element => {
  let position = element.previousElementSibling.previousElementSibling;
  element.textContent.charAt(2)==='1' ? position.classList.add('top-left'):'';
  element.textContent.charAt(2)==='2' ? position.classList.add('top-right'):'';
  element.textContent.charAt(2)==='3' ? position.classList.add('bot-left'):'';
  element.textContent.charAt(2)==='4' ? position.classList.add('bot-right'):'';
});

gestureNames.forEach(element => {
  let gradient

  element.textContent.includes('D_') ? gradient='linear-gradient(45deg,purple,orange)'
  :element.textContent.includes('PS_') ? gradient='linear-gradient(35deg,royalblue,cyan'
  :0;

  gradient ? element.parentElement.style.backgroundImage=gradient :0;

  element.textContent.length < 4 ? element.parentElement.classList.add('not-defined'):'';
});

for (let i=0; i < gestureGridItems.length; i++) {
  let id = gestureIds[i].textContent.substring(0,2);

  id ? gestureImages[i].style.backgroundImage=`url("img/${id}.png")` :'';
}

// let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// let letters2 = ['A','B']
// let numbers = [1,2,3,4]

// log(`Possible combinations: ${letters.length * letters2.length * numbers.length}`);

//  for (let i=0; i<letters.length; i++) {
//    for(let j=0 ; j<letters2.length; j++) {
//      for(let k=0;k<numbers.length;k++) {
//       log(`+gesture('${letters[i]+letters[j]+numbers[k]}', 'PS_')`)
//      }
//    }
//  }