// `click` event emitted by browser on mouse click.
document.querySelector('geo1').addEventListener('ontouchstart', function (evt) {
  alert("hi!");
});

document.querySelector('geo1').addEventListener('physicscollided', function (event) {
  console.log('Entity collided with', event.detail.collidingEntity);
});
