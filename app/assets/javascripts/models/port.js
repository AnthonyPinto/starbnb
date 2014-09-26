/*global Starbnb*/

Starbnb.Models.Port = Backbone.Model.extend({
  urlRoot: "api/ports",
  
  photos: function () {
    this._photos = this._photos ||
      new Starbnb.Collections.Photos([], {port: this});
    return this._photos;
  },
  
  user: function () {
    this._user = this._user ||
      new Starbnb.Models.User([], {port: this});
    return this._user;
  },
  
  userPhoto: function () {
    this._userPhoto = this._userPhoto ||
      new Starbnb.Models.Photo([], {user: this.user()});
    return this._userPhoto;
  },
  
  parse: function (response) {
    if (response.photos) {
      this.photos().set(response.photos, { parse: true });
      delete response.photos;
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