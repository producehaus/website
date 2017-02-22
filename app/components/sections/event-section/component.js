import Ember from 'ember';
import ScrollAnimatable from 'producehaus/mixins/scroll-animatable';

export default Ember.Component.extend(ScrollAnimatable, {
  tagName: "section",
  classNames: ["row"],

  scrolled(ratio) {
    this.tl.pause();
    this.tl.progress(ratio);
  },

  buildAnimations() {
    this.tl = new TimelineMax({paused:true});

    this.tl.to(this.$(".color-block"), 1, {
       width: "50%",
       ease: Power1.easeInOut
     });

    this.tl.to(this.$(".copy .container"), .75, {
      "margin-left": 0,
      "margin-right": 0,
      opacity: 1,
      ease: Power1.easeInOut
    }, "-=.5");

    this.tl.to(this.$(".copy .container"), .75, {
      "margin-left": "2em",
      "margin-right": "-2em",
      opacity: 0,
      ease: Power1.easeInOut
    }, "+=.5");

    this.tl.to(this.$(".color-block"), 1, {
       width: "100%",
       ease: Power1.easeInOut
     }, "-=.6");
  }
});
