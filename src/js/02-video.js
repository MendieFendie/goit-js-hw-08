import Player from "@vimeo/player";
var throttle = require("lodash.throttle");

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("play", function () {
  console.log("played the video!");
  const currentTime = localStorage.getItem("videoplayer-current-time");
  player.setCurrentTime(`${currentTime}`);
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

const callBack = throttle(function (timeupdate) {
  localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
}, 1000);

player.on("timeupdate", callBack);
