import Ember from 'ember';

const {
  sort
} = Ember.computed;

export default Ember.Controller.extend({
  artistSortDesc: ['name:asc'],
  sortedArtists: sort('model', "artistSortDesc")
});
