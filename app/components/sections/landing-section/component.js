import Ember from 'ember';
import ScrollAnimatable from 'producehaus/mixins/scroll-animatable';

export default Ember.Component.extend(ScrollAnimatable, {
  tagName: "section",

  actions: {
    onHover() {
      TweenMax.to(this.$(".image-container"), 1, {filter: 'invert(100%)'});
      TweenMax.to(this.$(".backdrop-underlay"), 0.5, {opacity: 0.5});
      TweenMax.to(this.$(".backdrop-container"), 0.5, {opacity: 1});
    },

    onOut() {
      TweenMax.to(this.$(".image-container"), 1, {filter: 'invert(0%)'});
      TweenMax.to(this.$(".backdrop-underlay"), 0.5, {opacity: 0});
      TweenMax.to(this.$(".backdrop-container"), 0.5, {opacity: 0});
    }
  }
});
