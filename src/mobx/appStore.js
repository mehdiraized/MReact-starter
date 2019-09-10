import { observable, action } from 'mobx';

class AppStore {
  @observable user = {};

  @action login(item) {
    this.user = item;
  }

  @action logout() {
    this.user = {};
  }
}

export default new AppStore();
