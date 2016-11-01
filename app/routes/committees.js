import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // console.log(params);
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.chamber + '&subcommittee=false&apikey=' + key;
    // console.log(url);
    var url2 = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' + params.committee_id + '&subcommittee=true&apikey=' + key;
    // console.log(url2);

    var parentCommittee = Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });

    var subcommittees = Ember.$.getJSON(url2).then(function(responseJSON) {
      // console.log(responseJSON.results);
      return responseJSON.results;
    });
    var foo = Ember.RSVP.hash({
      parentCommittee: parentCommittee,
      subcommittees: subcommittees
    });

    return foo;
  },
  actions:{
    selectChamber(params){
      this.transitionTo('committees', params);
    },
    showSubcommittees(params){
      this.transitionTo('committees', params);
    }
  }
});
