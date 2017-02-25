import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ["forceHide:force-hide:can-show"],

  didInsertElement() {
    if(Modernizr.touch) {
      this.set("forceHide", true);
    }
  }
});
