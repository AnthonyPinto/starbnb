/*global Starbnb JST*/

Starbnb.Views.SearchSidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.currentResults = this.collection
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  events: {
    "click" : "updateResults"
  },
  
  
  template: JST["search_sidebar"],
  
  
  updateResults: function () {
    var filters = {
      priceUpper: $("#price-upper").val(),
      priceLower: $("#price-lower").val(),
      checkIn: $("#datetimepickerStart").val(),
      checkOut: $("#datetimepickerEnd").val(),
      types: []
    }
    $(".checkbox-choice").each( function (i, box) {
      $box = $(box);
      if ($box.is(":checked")) {
        filters.types.push($box.val());
      }
    });
     
    var results = this.collection.filter( function (space) {
      return space.get('style') === "planet"
    })
    // debugger
    this.currentResults = new Starbnb.Collections.Spaces(results);
    this.renderResults();
  },
  
  
  render: function () {
    var content = this.template({spaces: this.collection});
    this.$el.html(content);
    this.renderResults();
    this.initSlider();
    this.initDate();
    this.updateResults();
    return this;
  },
  
  initSlider: function(){
    var $slider = this.$("#price-slider");
    $slider.noUiSlider({
    	range: {
    		'min': 0,
    		'max': 1000
    	},
      start: [0, 1000],
      step: 1,
    	connect: true,
    	orientation: "horizontal",
    	format: wNumb({
    		decimals: 0,
    		thousand: ''
    	})

    });
    $slider.Link("lower").to($("#price-lower"))
    $slider.Link("upper").to($("#price-upper"))
  },
  
  initDate: function () {
    this.$('.datetimepicker').datetimepicker({
      pickTime: false
    });
  },
  
  renderResults: function (results) {
    var view = new Starbnb.Views.ResultsSpaces({collection: this.currentResults});
    this.addSubview('.results-wrapper', view);
  }

});