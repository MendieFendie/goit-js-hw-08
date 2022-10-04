import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(`${currentTime}`);
}

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const callBack = throttle(function (timeupdate) {
  localStorage.setItem('videoplayer-current-time', timeupdate.seconds);
}, 1000);

player.on('timeupdate', callBack);
