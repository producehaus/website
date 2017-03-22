import Ember from 'ember';
import ScrollAnimatable from 'producehaus/mixins/scroll-animatable';

export default Ember.Component.extend(ScrollAnimatable, {
  tagName: "section",

  didResize: false,

  resized(windowHeight) {
    this.set("windowHeight", windowHeight);
    if(Modernizr.touch) {
      if(!this.didResize) {
        this.didResize = true;
        this.$('').height(windowHeight);
      }
    } else {
      this.$('').height(windowHeight);
    }
  }
});
