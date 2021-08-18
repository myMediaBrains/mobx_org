import { makeObservable, observable, action } from 'mobx';

class Todo {
  id = parseInt(Math.random() * 10);
  title = '';
  finished = false;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }
  toggle() {
    this.finished = !this.finished;
  }
}

export default Todo;
