/*global Starbnb*/

Starbnb.Collections.Spaceports = Backbone.Collection.extend({
  url: "api/spaceports",
  model: Starbnb.Models.Spaceport,
  
  initialize: function () {
    this.filters = null;
  },
  
  filteredModels: function () {
    var collection = this;
    var results = collection.filter( function (spaceport) {
      if ( !(collection.filters.types.length === 0) &&
        !(_.contains(collection.filters.types, spaceport.get('style'))) ){
        return false;
      }
      var price = parseInt(spaceport.get('price'), 10);
      if (price < collection.filters.priceLower || price > collection.filters.priceUpper){
        return false;
      }
      return true;
    });
    return results;
  },
  
  setFilters: function (filters) {
    this.filters = filters;
    this.trigger("filter");
  },
  
	getOrFetch: function (id) {
		var spaceport = this.get(id),
			spaceports = this;
		if (!spaceport) {
			spaceport = new Starbnb.Models.Spaceport({ id: id});
			spaceport.fetch({
				success: function () {
					spaceports.add(spaceport);
				},
			});
		} else {
			spaceport.fetch();
		}
		return spaceport;
	}
  
  
  
});

Starbnb.Collections.spaceports =  new Starbnb.Collections.Spaceports();