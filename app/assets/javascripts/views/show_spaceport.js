/*global Starbnb JST CURRENT_USER_ID*/

Starbnb.Views.ShowSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/show_spaceport"],
	
  initialize: function () {
    window.scrollTo(0,0)
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.comments(), 'sync', this.refreshCommentViews);
  },
  
  events: {
    "click .spaceport-comment-button" : "createComment",
    "dp.change #datetimepickerStart" : "setStartDate",
    "blur #datetimepickerStart" : "setStartDate",
    "dp.change #datetimepickerEnd" : "setEndDate",
    "blur #datetimepickerEnd" : "setEndDate"
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
  
  createComment: function () {

    var $field = $("#spaceport-comment-field");
    var body = $field.val();
    console.log(body);
    if (body.length !== 0){
      var attributes = {
        user_id: CURRENT_USER_ID,
        commentable_type: "Spaceport",
        commentable_id: this.model.get("id"),
        body: body
      };
      this.model.comments().create(attributes);
    }
  },
  
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
		this.initDate()
    this.renderComments();
    return this;
  },
  
  refreshCommentViews: function () {
    _(this.subviews()['.comments']).each( function (model) {
      model.remove();
    });
    this.renderComments();
  },
  
  
  renderComments: function () {
    this.model.comments().forEach(this.addComment.bind(this))
  },
  
  addComment: function (comment) {
    var view = new Starbnb.Views.ShowComment({
      model: comment
    });
    this.addSubview('.comments', view);
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