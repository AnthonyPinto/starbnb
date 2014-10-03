/*global Starbnb JST*/

Starbnb.Views.SearchSidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'filter', this.refreshResultViews)
  },
  
  events: {
    "set #price-slider" : "updateResults",
    "change .checkbox-choice" : "updateResults",
    "change #staff-input" : "updateResults",
    "dp.change #datetimepickerStart" : "setStartDate",
    "blur #datetimepickerStart" : "setStartDate",
    "dp.change #datetimepickerEnd" : "setEndDate",
    "blur #datetimepickerEnd" : "setEndDate",
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
    var endStr = $(event.currentTarget).val();
    var startPicker = $("#datetimepickerStart")
    var startStr = startPicker.val()
    var startDate = new Date(startStr);
    var endDate = new Date(endStr);
    if ((!startStr) || endDate <= startDate) {
      startDate = endDate;
      startDate.setDate(endDate.getDate() - 1);
      startPicker.val((startDate.getMonth() + 1) + '/' + startDate.getDate() + '/' +  startDate.getFullYear());
    }
  },
  
  
  updateResults: function () {
    var $priceUpper = this.$("#price-upper");
    var $priceLower = this.$("#price-lower");
    if ($priceUpper.val() === "10000") {
      $priceUpper.val("10000+")
    }
    var filters = {
      priceUpper: parseInt($priceUpper.val(), 10),
      priceLower: parseInt($priceLower.val(), 10),
      staff: parseInt(this.$("#staff-input").val(), 10),
      checkIn: this.$("#datetimepickerStart").val(),
      checkOut: this.$("#datetimepickerEnd").val(),
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
        'max': 10000
      },
      start: [0, 10000],
      step: 1,
      connect: true,
      orientation: "horizontal",
      format: wNumb({
        decimals: 0,
        thousand: ''
      })

    });
    var $upper = $("#price-upper")
    $slider.Link("lower").to($("#price-lower"));
    $slider.Link("upper").to($upper);
    $upper.val("10000+")
  },
  
  initDate: function () {
    this.$('.datetimepicker').datetimepicker({
      pickTime: false
    });
    var now = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    this.$('#datetimepickerStart').data("DateTimePicker").setMinDate(now)
    this.$('#datetimepickerEnd').data("DateTimePicker").setMinDate(tomorrow)
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