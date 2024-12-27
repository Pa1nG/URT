const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const close1 = document.getElementById('close');
const sign = document.getElementById('btn');
const leave1 = document.getElementById('leave');

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'grid'; 
});
close1.addEventListener('click', () => {
  popup.style.display = 'none'; 
});
sign.addEventListener('click', () => {
  window.location.href = 'main1.html';
});
leave1.addEventListener('click', () => {
  window.location.href = 'google.com';
});