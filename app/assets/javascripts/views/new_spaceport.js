/*global Starbnb JST*/

Starbnb.Views.NewSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/new_spaceport"],
  
  events: {
    "click #new-img-button": "firePicker",
    "click #new-spaceport-submit" : "trySubmit"
  },
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
    this.marker = null;
    return this;
  },
  
  trySubmit: function (event) {
    event.preventDefault();
    window.removeAlertDivs();
    var attributes = this.$('form').serializeJSON();
    attributes.spaceport.latitude = this.$("#new-spaceport-latitude").html();
    attributes.spaceport.longitude = this.$("#new-spaceport-longitude").html();
    attributes.spaceport.user_id = window.CURRENT_USER_ID;
    this.model.set(attributes);
    var view = this;
    this.model.save(
      {},
      {
        success: function (model) {
          view.createPhoto(model.escape("id"));
        },
        error: function (model, response) {
          var $form = this.$(".form-alerts");
          _(response.responseJSON).each( function (message) {
            
            var $alert = $("<div class='alert alert-warning'></div>");
            $alert.html(message);
            $form.prepend($alert);
            window.scrollTo(0,0)
          });
        }
      }
    );
  },
  
  createPhoto: function (spaceport_id) {
    var photo = new Starbnb.Models.Photo();
    photo.set({
      url: this.$(".new-spaceport-img").attr("src"),
      photable_type: "Spaceport",
      photable_id: spaceport_id
    })
    photo.save(
      {},
      {
        success: function () {
          document.location.href= ("/index#spaceports/" + spaceport_id);
        },
        
      }
    )
  },
  
  onRender: function () {
    var mapOptions = {
      center: { lat: 0, lng: 0},
      zoom: 1,
      draggableCursor:'pointer'
    };
    var mapView = this;
    this.map = new google.maps.Map(this.$('#new-map-canvas')[0], mapOptions);
    google.maps.event.addListener(this.map, 'click', function(event) {
      if (mapView.marker) {
        mapView.marker.setPosition(event.latLng);
      } else {
        mapView.marker = new google.maps.Marker({
          position: event.latLng,
          map: mapView.map,
          title: "spaceport location",
          icon: 'assets/marker-standard.png',
        })
      }
      mapView.updateCoords();
    });
  },
  
  firePicker: function (event) {
    view = this;
    event.preventDefault();
    filepicker.pick( {
          mimetypes: ['image/*'],
        },
    
      function(Blob){
        console.log(Blob.url);
        view.$(".new-spaceport-img").attr("src", Blob.url);
      }
    );
  },
  
  updateCoords: function () {
    var $lat = this.$("#new-spaceport-latitude");
    var $lng = this.$("#new-spaceport-longitude");
    $lat.html(this.marker.position.lat());
    $lng.html(this.marker.position.lng());
  }
  
  
});