// `click` event emitted by browser on mouse click.
document.getElementById('geo1').addEventListener('ontouchstart', function (evt) {
  alert("hi!");
});

document.getElementById('geo1').addEventListener('click', function (evt) {
  alert("hi!");
});

document.getElementById('geo1').addEventListener('physicscollided', function (event) {
  console.log('Entity collided with', event.detail.collidingEntity);
});

var geoEl = document.querySelector('#geo1');

geoEl.addEventListener("click", function () {
  geoEl.setAttribute('material', {color: 'red'});
  alert('hi!');
})
