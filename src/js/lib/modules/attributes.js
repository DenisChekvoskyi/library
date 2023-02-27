import $ from "../core";

$.prototype.setAtr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(name, value);
  }
  return this;
};

$.prototype.delAtr = function (name) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(name);
  }
  return this;
};
