import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
 model: function(params) {
   var key = config.myApiKey;
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=3da99fce4c2e480bbdfcd33de8ab717a&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
