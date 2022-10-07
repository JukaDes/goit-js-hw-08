import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(videoCurrentTime, 1000));
function videoCurrentTime (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
}

const timeUpdate = Number(localStorage.getItem('videoplayer-current-time'))

player.setCurrentTime(timeUpdate)
    .then(function (seconds) {
    })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError': break;
        default: break;
    }
});