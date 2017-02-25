import Ember from 'ember';
import ScrollAnimatable from 'producehaus/mixins/scroll-animatable';

export default Ember.Component.extend(ScrollAnimatable, {
  classNameBindings: ["shouldHideScroll:should-hide-scroll"],
  shouldShowBottom: false,

  onReachedBottom() {
    this.set("shouldHideScroll", true);
  },

  onHasScrollRemaining() {
    this.set("shouldHideScroll", false);
  },
});
