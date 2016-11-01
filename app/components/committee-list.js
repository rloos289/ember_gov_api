import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectChamber(value){
      var params = {
        chamber: value,
        committee_id: null
      };
      this.sendAction("selectChamber", params);
    },
    showSubcommittees(committee){
      var params = {
        chamber: committee.chamber,
        committee_id: committee.committee_id
      };
      this.sendAction("showSubcommittees", params);
    }
  }
});
