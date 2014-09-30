/*global Starbnb JST*/

Starbnb.Views.ShowSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/show_spaceport"],
	
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "dp.change #datetimepickerStart" : "setStartDate",
    "blur #datetimepickerStart" : "setStartDate",
    "dp.change #datetimepickerEnd" : "setEndDate",
    "blur #datetimepickerEnd" : "setEndDate",
  },
	
  initDate: function () {
    this.$('.datetimepicker').datetimepicker({
      pickTime: false
    });
  },
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
		this.initDate()
    return this;
  },
  
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
});