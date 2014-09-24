/*global Starbnb JST*/

Starbnb.Views.SearchSidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  
  template: JST["search_sidebar"],
  
  render: function () {
    var content = this.template({spaces: this.collection});
    this.$el.html(content);
    this.renderBriefs();
    this.initSlider();
    this.initDate();
    return this;
  },
  
  initSlider: function(){
    var $slider = this.$("#price-slider");
    $slider.noUiSlider({
      start: [0, 1000],
    	connect: true,
    	orientation: "horizontal",
    	range: {
    		'min': 0,
    		'max': 1000
    	}
    });
    $slider.Link("lower").to($("#price-lower"), 'html')
    $slider.Link("upper").to($("#price-upper"), 'html')
  },
  
  initDate: function () {
    this.$('.datetimepicker').datetimepicker();
  },
  
  renderBriefs: function () {
    this.collection.each(this.addBrief.bind(this));
  },
  
  addBrief: function (brief) {
    var view = new Starbnb.Views.BriefSpace({
      model: brief
    });
    this.addSubview('.briefs', view);
  }

});