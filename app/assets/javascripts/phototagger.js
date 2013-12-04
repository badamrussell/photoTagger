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

PT.Photo = function(attributes) {
  _.extend(this, attributes)




  this.get = function(attr_name) {
    return this[attr_name];
  };

  this.set = function(attr_name, val) {
    this[attr_name] = val;
  };

  this.create = function(callback) {
    var thisPhoto = this;

    $.ajax({
      url: "/api/photos",
      type: "POST",
      data: {photo: {url: thisPhoto.url, title: thisPhoto.title}},
      success: function(resp) {
        console.log("CREATE SUCCESS:",resp);
        _.extend(thisPhoto, resp);
        PT.Photo.all.push(thisPhoto);
        PT.Photo.trigger("add");
        callback(resp);
      },
      error: function(resp, err, message) {
        console.log("CREATE ERROR", resp, err, message);
      }
    })

  };

  this.save = function(callback) {
    var thisPhoto = this;
    console.log("SAVE...");
    if (photo.id) {
      $.ajax({
        url: "/api/photos/" + photo.id,
        type: "PUT",
        data: this,
        success: function(resp) {
          console.log("SAVE SUCCESS:",resp);
          _.extend(thisPhoto, resp);
          callback(resp)
        },
        error: function(resp, err, message) {
          console.log("SAVE ERROR", resp, err, message);
        }
      })
    } else {
      this.create(callback);
    }
  };


}

_.extend(PT.Photo, {
  fetchByUserId: function(userId, callback) {
    $.ajax({
      url: "/api/users/" + userId + "/photos",
      type: "GET",
      success: function(photosResponse) {
        console.log("FETCH SUCCESS", photosResponse);
        //assume photosResponse is an array of ....
        var userPhotos = [];

        _.each(photosResponse, function(photoData) {
          userPhotos.push(new PT.Photo(photoData));
        });

        callback(userPhotos);
      },
      error: function(resp, err, message) {
        console.log("FETCH ERROR", resp, err, message);
      }
    });
  },

  all: [],
  _events: {},

  on: function(eventName, callback) {
    //console.log(this);
    this._events[eventName] = this._events[eventName] || [];

    this._events[eventName].push(callback);
  },

  trigger: function(eventName) {
    //use fire?
    //this.fire(eventName);

    _.each(this._events[eventName], function(cb) {
      cb();
    });
  },
})