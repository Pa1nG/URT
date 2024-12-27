const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const close1 = document.getElementById('close');
const sign = document.getElementById('btn');
const leave1 = document.getElementById('leave');
const menu = document.getElementById('menu')
const men = document.getElementById('men')

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'grid'; 
});
close1.addEventListener('click', () => {
  popup.style.display = 'none'; 
});

if (men.style.display == 'none') {
  menu.addEventListener('click', () => {
    men.style.display = men.style.display === 'block' ? 'none' : 'block';
  });
}
menu.addEventListener('click', () => {
  men.classList.toggle('show');
});
if (men.style.display != 'none') {
  menu.addEventListener('click', () => {
    men.style.display = 'none'; 
  });
}
  

sign.addEventListener('click', () => {
  window.location.href = 'main1.html';
});
leave1.addEventListener('click', () => {
  window.location.href = 'google.com';
});
