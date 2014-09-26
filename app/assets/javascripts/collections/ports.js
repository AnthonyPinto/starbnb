/*global Starbnb*/

Starbnb.Collections.Ports = Backbone.Collection.extend({
  url: "api/ports",
  model: Starbnb.Models.Port,
  
  initialize: function () {
    this.filters = null;
  },
  
  filteredModels: function () {
    var collection = this;
    var results = collection.filter( function (port) {
      if ( !(collection.filters.types.length === 0) &&
        !(_.contains(collection.filters.types, port.get('style'))) ){
        return false;
      }
      var price = parseInt(port.get('price'), 10);
      if (price < collection.filters.priceLower || price > collection.filters.priceUpper){
        return false;
      }
      return true
    });
    return results;
  },
  
  
  
});