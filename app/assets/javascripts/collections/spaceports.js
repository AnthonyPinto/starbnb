/*global Starbnb*/

Starbnb.Collections.Spaceports = Backbone.Collection.extend({
  url: "api/spaceports",
  model: Starbnb.Models.Spaceport,
  
  initialize: function () {
    this.filters = null;
    this.listenTo(this, "sync", this.onSync);
  },
  
  onSync: function () {
    _(this.models).each( function (spaceport) {
      this.listenTo(spaceport, "hovering", function () {
        // console.log(spaceport.escape("name"));
        this.trigger("hovering", spaceport.get("id"));
      });
      this.listenTo(spaceport, "notHovering", function () {
        // console.log(spaceport.escape("name"));
        this.trigger("notHovering", spaceport.get("id"));
      });
    }.bind(this));
  },
  
  filteredModels: function () {
    var collection = this;
    var results = collection.filter( function (spaceport) {
      if (collection.filters) {
        if ( !(collection.filters.types.length === 0) &&
          !(_.contains(collection.filters.types, spaceport.get('style'))) ){
          return false;
        }
        var price = parseInt(spaceport.get('price'), 10);
        if (price < collection.filters.priceLower || price > collection.filters.priceUpper){
          return false;
        }
      }
      var lat = parseFloat(spaceport.get("latitude"));
      var lng = parseFloat(spaceport.get("longitude"));
      var latlng = new google.maps.LatLng(lat, lng);
      
      if (collection.bounds && !collection.bounds.contains(latlng)){
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
  
  setBounds: function (bounds) {
    this.bounds = bounds;
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
				}
			});
		} else {
			spaceport.fetch();
		}
		return spaceport;
	}
  
  
  
});

Starbnb.Collections.spaceports =  new Starbnb.Collections.Spaceports();