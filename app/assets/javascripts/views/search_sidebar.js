/*global Starbnb JST*/

Starbnb.Views.SearchSidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'filter', this.refreshResultViews)
  },
  
  events: {
    "set #price-slider" : "updateResults",
    "change .checkbox-choice" : "updateResults",
    "dp.change #datetimepickerStart" : "setStartDate",
    "input #datetimepickerStart" : "setStartDate",
    "input #datetimepickerEnd" : "setEndDate",
    "db.change #datetimepickerEnd" : "setEndDate",
  },
  
  
  template: JST["search_sidebar"],
  
  setStartDate: function (event) {
    var startStr = $(event.currentTarget).val();
    var endPicker = $("#datetimepickerEnd")
    var endStr = endPicker.val()
    var startDate = new Date(startStr);
    var endDate = new Date(endStr);
    if ((!endStr) || endDate <= startDate) {
      endDate = startDate;
      endDate.setDate(startDate.getDate() + 1);
      endPicker.val((endDate.getMonth() + 1) + '/' + endDate.getDate() + '/' +  endDate.getFullYear());
    }
  },

  setEndDate: function (event) {
    debugger
    var endStr = $(event.currentTarget).val();
    var startPicker = $("#datetimepickerStart")
    var startStr = startPicker.val()
    var startDate = new Date(startStr);
    var endDate = new Date(endStr);
    debugger
    if ((!startStr) || endDate <= startDate) {
      startDate = endDate;
      startDate.setDate(endDate.getDate() - 1);
      startPicker.val((startDate.getMonth() + 1) + '/' + startDate.getDate() + '/' +  startDate.getFullYear());
    }
  },
  
  
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
    this.collection.setFilters(filters);
  },
  
  refreshResultViews: function () {
    _(this.subviews()['.briefs']).each( function (model) {
      model.remove();
    });
    this.renderResults();
  },
  
  
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.renderResults();
    this.initSlider();
    this.initDate();
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
    _(this.collection.filteredModels()).each(this.addBrief.bind(this));
  },
  
  addBrief: function (brief) {
    var view = new Starbnb.Views.BriefSpaceport({
      model: brief
    });
    this.addSubview('.briefs', view);
  }

});