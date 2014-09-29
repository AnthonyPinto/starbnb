/*global Starbnb*/

Starbnb.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",
  
  photo: function () {
    this._photo = this._photo ||
      new Starbnb.Models.Photo([], {user: this});
    return this._photo;
  },
  
  spaceports: function () {
    this._spaceports = this._spaceports ||
      new Starbnb.Collections.Spaceports([], {user: this});
    return this._spaceports;
  },
  
  parse: function (response) {
    if (response.photo) {
      this.photo().set(response.photo, { parse: true });
      delete response.photo;
    }
    //This creates new spaceport models rather than getOrFetching them.
    //to be fixed
    if (response.spaceports) {
      this.spaceports().set(response.spaceports, {parse: true});
      delete response.spaceports;
    }
    return response;
  },
});