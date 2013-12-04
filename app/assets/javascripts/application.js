// This is a manifest file that'll be compiled into application.js,
// which will include all the files listed below.
//
// Any JavaScript/Coffee file within this directory,
// lib/assets/javascripts, vendor/assets/javascripts, or
// vendor/assets/javascripts of plugins, if any, can be referenced
// here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll
// appear at the bottom of the the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE
// PROCESSED, ANY BLANK LINE SHOULD GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.serializeJSON
//= require underscore
//
//= require_tree ./models
//= require_tree ../templates
//
//= require_tree .

PT = {};

_.extend(PT, {
  initialize:   function () {
    PT.Photo.fetchByUserId(CURRENT_USER_ID, function () {
      PT.showPhotosIndex();
    });
  },

  showPhotoDetail: function (photo) {
    var content = $("#content");

    var photoDetailView = new PT.PhotoDetailView(photo);
    content.html(photoDetailView.render().$el);
  },

  showPhotosIndex: function () {
    var content = $("#content");
    content.empty();

    var photosListView = new PT.PhotosListView();
    content.append(photosListView.render().$el);

    var photoFormView = new PT.PhotoFormView();
    content.append(photoFormView.render().$el);
  },
});

var POJO = function(attributes) {

}

var Photo = function(attributes) {
  _.extend(this, attributes)

  this.get = function(attr_name) {
    return this[attr_name];
  };

  this.set = function(attr_name, val) {
    this[attr_name] = val;
  };

  this.create = function(callback) {
    var thisPhoto = this;

    $.ajax {
      url: "/api/photos",
      type: "POST",
      data: this,
      success: function(resp) {
        console.log("CREATE SUCCESS:",resp);
        _.extend(thisPhoto, resp);
        callback(resp);
      }
    }
  };

  this.save = function(callback) {
    var thisPhoto = this;

    if (photo.id) {
      $.ajax {
        url: "/api/photos/" + photo.id,
        type: "PUT",
        data: this,
        success: function(resp) {
          console.log("SAVE SUCCESS:",resp);
          _.extend(thisPhoto, resp);
          callback(resp)
        }
      }
    } else {
      this.create(callback);
    }
  };
}

