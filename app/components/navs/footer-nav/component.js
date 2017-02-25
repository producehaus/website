import Ember from 'ember';
import ScrollAnimatable from 'producehaus/mixins/scroll-animatable';

export default Ember.Component.extend(ScrollAnimatable, {
  classNameBindings: ["shouldHideScroll:should-hide-scroll", "forceHide:force-hide:can-show"],
  shouldShowBottom: false,

  didInsertElement() {
    if(Modernizr.touch) {
      this.set("forceHide", true);
    }

    this._super();
  },

  onReachedBottom() {
    this.set("shouldHideScroll", true);
  },

  onHasScrollRemaining() {
    this.set("shouldHideScroll", false);
  },
});
