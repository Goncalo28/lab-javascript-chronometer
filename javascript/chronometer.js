class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(callback){
        callback();
      }
      }, 1000);
    }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(num) {
      if ( num < 10 ) {
        return `0${num}`;
      } else {
        return `${num}`;
      }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}
 