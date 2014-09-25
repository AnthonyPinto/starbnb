/*global Starbnb JST*/

Starbnb.Views.SearchSidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.currentResults = this.collection;
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  events: {
    "set #price-slider" : "updateResults",
    "change .checkbox-choice" : "updateResults"
  },
  
  
  template: JST["search_sidebar"],
  
  
  updateResults: function () {
    var filters = {
      priceUpper: parseInt($("#price-upper").val(), 10),
      priceLower: parseInt($("#price-lower").val(), 10),
      checkIn: $("#datetimepickerStart").val(),
      checkOut: $("#datetimepickerEnd").val(),
      types: []
    };
    $(".checkbox-choice").each( function (i, box) {
      var $box = $(box);
      if ($box.is(":checked")) {
        filters.types.push($box.val());
      }
    });
     
    var results = this.collection.filter( function (port) {
      if ( !(filters.types.length === 0) &&
        !(_.contains(filters.types, port.get('style'))) ){
        return false;
      }
      var price = parseInt(port.get('price'), 10);
      if (price < filters.priceLower || price > filters.priceUpper){
        return false;
      }
      return true
    });
    this.currentResults = new Starbnb.Collections.Ports(results);
    this.refreshResultViews();
  },
  
  refreshResultViews: function () {
    console.log("refreshResultViews")
    _(this.subviews()['.results-wrapper']).each( function (model) {
      model.remove();
    });
    this.renderResults();
  },
  
  
  
  render: function () {
    var content = this.template({ports: this.collection});
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
    $slider.Link("lower").to($("#price-lower"));
    $slider.Link("upper").to($("#price-upper"));
  },
  
  initDate: function () {
    this.$('.datetimepicker').datetimepicker({
      pickTime: false
    });
  },
  
  renderResults: function () {
    var view = new Starbnb.Views.ResultsPorts({collection: this.currentResults});
    this.addSubview('.results-wrapper', view);
  }

});