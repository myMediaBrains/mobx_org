import { makeAutoObservable } from 'mobx';

// Model the application state
class Timer {
  secondsPassed = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increase() {
    this.secondsPassed += 1;
  }
  reset() {
    this.secondsPassed = 0;
  }
}
export const myTimer = new Timer();

setInterval(() => {
  myTimer.increase();
}, 1000);
