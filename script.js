// feather icon
feather.replace({
  class: 'icon',
  width: 18
})

// menus
const menus = [
  { name: 'Accounting settings', icon: 'user' },
  { name: 'Give feedback', icon: 'message-square' },
  { name: 'About', icon: 'info' },
  { name: 'Support', icon: 'flag' },
  { name: 'Legal', icon: 'file-minus' },
  { name: 'Log out', icon: 'log-out' },
]
const menuElem = document.querySelector('.menus');
menuElem.innerHTML = menus.map((menu, index) => {
  const firstActive = index === 0 ? 'active' : '';
  return `<li>
            <a href="#">
              <i data-feather="${menu.icon}"></i>
              ${menu.name}
            </a>
          </li>`
}).join('');

// switcher menu sliding when click
const indicator = document.querySelector('.indicator');
// const switcherSliding = (e) => {
//   indicator.style.transform = `translateX(${e.offsetLeft}px)`;
//   indicator.style.width = `${e.offsetWidth}px`;
// }

// switcher list
const switcherList = document.querySelectorAll('.switcher-list');
const main = document.querySelector('#main');

function switcherHandle(e) {
  e.preventDefault();
  const themeColor = e.target.dataset.themeSwitcher;
  switcherList.forEach(element => {
    element.classList.remove('active')  
  });
  indicator.addEventListener('transitionend', (e) => {
    console.log(e)
  })
  // e.currentTarget.classList.add('active')
  main.dataset.theme = themeColor;

  // switcherSliding(e.target)
}

switcherList.forEach(element => {
  element.addEventListener('click', switcherHandle)
})

document.addEventListener('DOMContentLoaded', () => {
  switcherList[0].click();
}, false)