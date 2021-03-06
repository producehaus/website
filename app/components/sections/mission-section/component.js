import Ember from 'ember';
import ScrollAnimatable from 'producehaus/mixins/scroll-animatable';

export default Ember.Component.extend(ScrollAnimatable, {
  tagName: "section",

  didResize: false,

  resized(windowHeight) {
    if(Modernizr.touch) {
      if(!this.didResize) {
        this.didResize = true;
        this.$('').height(windowHeight);
      }
    } else {
      this.$('').height(windowHeight);
    }
  },

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

    this.tl.to(this.$(".copy-container"), 0.75, {
      "left": "0%",
      opacity: 1,
      ease: Power1.easeInOut
    }, "-=.5");

    this.tl.to(this.$(".color-block"), 1, {
       opacity: 1
     }, "+=1");
  }
});
