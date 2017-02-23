import Ember from 'ember';
import ScrollAnimatable from 'producehaus/mixins/scroll-animatable';

export default Ember.Component.extend(ScrollAnimatable, {
  customPlayerVars: {
    autoplay: 0,
    showinfo: 0,
    disablekb: 1,
    controls: 0,
    loop: 1,
    fs: 0,
    enablejsapi: 1,
    playsinline: 1
  },

  scrolled(ratio) {
    // this.tl.pause();
    // this.tl.progress(ratio);
    console.log(ratio);

    if(this.played) {
      return;
    }

    if(ratio > .2) {
      if(this.get("emberYoutube") !== undefined) {
        this.get("emberYoutube").send("play");
        this.played = true;
      }
    }
  },

  actions: {
    buffering() {
      this.get("emberYoutube").send("mute");
    }
  }
});
