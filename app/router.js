import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('events');
  this.route('about');
  this.route('press');

  // Orphan routes
  this.route('grand-opening');
});

export default Router;
