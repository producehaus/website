import Ember from 'ember';

export default Ember.Mixin.create({
  resizeTimeout: null,
  lastScroll: 0,
  isBottom: false,
  ticking: false,
  lastRatio: 0,

  didInsertElement() {
    this.buildAnimations();
    this._addInternalListeners();

    // Force refresh
    this._resized();
    this._scrolled();

    this._super();
  },

  willDestroyElement() {
    this._removeInternalListeners();

    this._super();
  },

  buildAnimations() {
    //Override
  },

  _addInternalListeners() {
    this.boundScroll = ::this._scrollThrottler;
    this.resizeScroll = ::this._resizeThrottler;

    window.addEventListener('scroll', this.boundScroll);
    window.addEventListener('resize', this.resizeScroll);
  },

  _removeInternalListeners() {
    window.removeEventListener('scroll', this.boundScroll);
    window.removeEventListener('resize', this.resizeScroll);
  },

  _scrollThrottler() {
    this.lastScroll = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this._scrolled(this.lastScroll);
        this.ticking = false;
      });
    }
    this.ticking = true;
    const remainingScroll = (document.body.scrollHeight - $(window).height()) - window.scrollY;

    if(remainingScroll <= 0) {
      if(!this.isBottom) {
        this.isBottom = true;
        this.onReachedBottom();
      }
    } else {
      if(this.isBottom) {
        this.isBottom = false;
        this.onHasScrollRemaining();
      }

    }

  },

  _resizeThrottler() {
    if ( !this.resizeTimeout ) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        this._resized();
       }, 66);
    }
  },

  _resized() {
    this.set('position', this.$('').offset());
    this.set('height', this.$('').height());
    this.set('width', this.$('').width());

    this.resized(this.$(window).height());
  },

  scrolled() {
    //Override
  },

  resized() {
    //Override
  },

  onReachedBottom() {

  },

  onHasScrollRemaining() {

  },

  _scrolled() {
    const center = window.scrollY + (window.innerHeight/2) - this.get('position').top;
    const numerator = window.scrollY + window.innerHeight - this.get('position').top;
    const denominator = this.get('height') + window.innerHeight;
    const ratio = numerator/denominator;

    if(ratio < 0) {
      if(this.get('lastRatio') > 0) {
        this.get('lastRatio');
        this.scrolled(0, center);
      }
    } else if(ratio > 1) {
      if(this.get('lastRatio') < 1) {
        this.set('lastRatio', 1);
        this.scrolled(1, center);
      }
    } else {
      this.set('lastRatio', ratio);
      this.scrolled(ratio, center);
    }
  }
});
