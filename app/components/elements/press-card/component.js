import Ember from 'ember';

const {
  notEmpty
} = Ember.computed;

export default Ember.Component.extend({
  classNames: ['col'],
  hasAuthor: notEmpty('author')
});
