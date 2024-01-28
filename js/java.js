var gmMenu = document.querySelector('.gamburger-menu')
var navbarFixer = document.querySelector('.nav-fixer')
var navBg = document.querySelector('.nav-bg')
var clearBtn = document.querySelector('.clear-btn')
var count = 0
var count2 = 0
var count3 = 0
var count4 = 0
var count5 = 0
var count6 = 0
var margins = ['-30px', '-245px', '-460px', '-675px', '-890px', '-1105px'];
var prev = document.querySelector('.prev-center')
var next = document.querySelector('.next-center')
var prevTablet = document.querySelector('.prev-center-tablet')
var nextTablet = document.querySelector('.next-center-tablet')
var prevTablet2 = document.querySelector('.prev-center-2-tablet')
var nextTablet2 = document.querySelector('.next-center-2-tablet')
var prev2 = document.querySelector('.prev-center-2')
var next2 = document.querySelector('.next-center-2')
var firstCard = document.querySelector('.first-card')
var secondCard = document.querySelector('.second-card')
var cardWidth = 215;
var maxCount = 7;
var prevMobile = document.querySelector('.mobile-prev')
var nextMobile = document.querySelector('.mobile-next')
var prevMobile2 = document.querySelector('.mobile-prev2')
var nextMobile2 = document.querySelector('.mobile-next2')


gmMenu.addEventListener('click', () => {
  navbarFixer.style.display = 'flex';
  navBg.style.display = 'flex';
})

clearBtn.addEventListener('click', () => {
  navbarFixer.classList.add('nav-fixer-nowork')
  navBg.classList.add('nav-bg-nowork')
  setTimeout(() => {
    navbarFixer.style.display = 'none';
    navBg.style.display = 'none';
    navbarFixer.classList.remove('nav-fixer-nowork')
    navBg.classList.remove('nav-bg-nowork')
  }, 1000);
})


prev.addEventListener('click', () => {
  if (count > 0) {
    count--;
    firstCard.style.marginLeft = margins[count];
  }

  if (count == 0) {
    firstCard.style.marginLeft = '15px';
  }
});

next.addEventListener('click', () => {
  if (count < margins.length - 1) {
    count++;
    firstCard.style.marginLeft = margins[count];
  }
});


prev2.addEventListener('click', () => {
  if (count2 > 0) {
    count2--;
    secondCard.style.marginLeft = margins[count2];
  }

  if (count2 == 0) {
    secondCard.style.marginLeft = '15px';
  }
});

next2.addEventListener('click', () => {
  if (count2 < margins.length - 1) {
    count2++;
    secondCard.style.marginLeft = margins[count2];
  }
});


prevTablet.addEventListener('click', () => {
  if (count3 > 0) {
    count3--;
    firstCard.style.marginLeft = `-${count3 * cardWidth}px`;
  }
});

nextTablet.addEventListener('click', () => {
  if (count3 < maxCount) {
    count3++;
    firstCard.style.marginLeft = `-${count3 * cardWidth}px`;
  }
});

prevTablet2.addEventListener('click', () => {
  if (count4 > 0) {
    count4--;
    secondCard.style.marginLeft = `-${count4 * cardWidth}px`;
  }
});

nextTablet2.addEventListener('click', () => {
  if (count4 < maxCount) {
    count4++;
    secondCard.style.marginLeft = `-${count4 * cardWidth}px`;
  }
});


nextMobile.addEventListener('click', () => {
  if (count5 < 8) {
    firstCard.style.marginLeft = `${parseInt(firstCard.style.marginLeft || '0') - 215}px`;
    count5++;
  }

  if (count5 == 8) {
    firstCard.style.marginLeft = `-1790px`;
  }
});

prevMobile.addEventListener('click', () => {
  if (parseInt(firstCard.style.marginLeft || '0') < 0) {
    firstCard.style.marginLeft = `${parseInt(firstCard.style.marginLeft || '0') + 215}px`;
    count5--;
  }

  if (count5 == 0) {
    firstCard.style.marginLeft = '0'
  }
});



nextMobile2.addEventListener('click', () => {
  if (count6 < 8) {
    secondCard.style.marginLeft = `${parseInt(secondCard.style.marginLeft || '0') - 215}px`;
    count6++;
  }

  if (count6 == 8) {
    secondCard.style.marginLeft = `-1790px`;
  }
});

prevMobile2.addEventListener('click', () => {
  if (parseInt(secondCard.style.marginLeft || '0') < 0) {
    secondCard.style.marginLeft = `${parseInt(secondCard.style.marginLeft || '0') + 215}px`;
    count6--;
  }

  if (count6 == 0) {
    secondCard.style.marginLeft = '0'
  }
});