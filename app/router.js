import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('committees', {path: '/committees/:params_chamber'});
  // this.route('committees', {path: '/committees/:chamber/:committee_id'});
  this.route('bills');
});

export default Router;
