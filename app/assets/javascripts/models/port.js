/*global Starbnb*/

Starbnb.Models.Port = Backbone.Model.extend({
  urlRoot: "api/ports",
  
  styleStr: function () {
    var text = '';
    var style = this.get('style');
    switch (style) {
    case 'port':
      text = 'Entire spaceport';
      break;
    case 'field':
      text = 'Private airfield';
      break;
    case 'pad':
      text = 'Shared airfield';
      break;
    }
    return text;
  }
  
});