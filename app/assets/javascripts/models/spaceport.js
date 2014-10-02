/*global Starbnb*/

Starbnb.Models.Spaceport = Backbone.Model.extend({
  urlRoot: "api/spaceports",
  
  photos: function () {
    this._photos = this._photos ||
      new Starbnb.Collections.Photos([], {spaceport: this});
    return this._photos;
  },
  
  comments: function () {
    this._comments = this._comments ||
      new Starbnb.Collections.Comments([], {spaceport: this});
    return this._comments;
  },
  
  user: function () {
    this._user = this._user ||
      new Starbnb.Models.User([], {spaceport: this});
    return this._user;
  },
  
  userPhoto: function () {
    this._userPhoto = this._userPhoto ||
      new Starbnb.Models.Photo([], {user: this.user()});
    return this._userPhoto;
  },
  
  hovering: function () {
    this.trigger("hovering")
  },
  
  notHovering: function () {
    this.trigger("notHovering")
  },
  
  
  parse: function (response) {
    if (response.photos) {
      this.photos().set(response.photos, { parse: true });
      delete response.photos;
    }
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }
    if (response.user) {
      this.user().set(response.user);
      delete response.user;
    }
    if (response.user_photo) {
      this.userPhoto().set(response.user_photo);
      delete response.user_photo;
    }
    return response;
  },
  
  styleStr: function () {
    var text = '';
    var style = this.get('style');
    switch (style) {
    case 'spaceport':
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