import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter() {
    this.attrs.onHover();
  },

  mouseLeave() {
      this.attrs.onOut();
  }
});
