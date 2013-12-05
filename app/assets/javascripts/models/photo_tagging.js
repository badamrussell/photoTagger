PT.PhotoTagging = function(attributes) {
  _.extend(this, attributes)



  this.get = function(attr_name) {
    return this[attr_name];
  };

  this.set = function(attr_name, val) {
    this[attr_name] = val;
  };

  this.create = function(callback) {
    var thisPhotoTagging = this;

    $.ajax({
      url: "/api/photo_taggings",
      type: "POST",
      data: {photo_tagging: {user_id: thisPhotoTagging.user_id, x_pos: thisPhotoTagging.x_pos, y_pos: thisPhotoTagging.y_pos, photo_id: thisPhotoTagging.photo_id}},
      success: function(resp) {
        console.log("CREATE SUCCESS:",resp);
        _.extend(thisPhotoTagging, resp);
        PT.PhotoTagging.all.push(thisPhotoTagging);
        //PT.PhotoTagging.trigger("add");
        callback(resp);
      },
      error: function(resp, err, message) {
        console.log("CREATE ERROR", resp, err, message);
      }
    })

  };
  //Assuming we are not editing Photo Tags
  // this.save = function(callback) {
 //    var thisPhotoTagging = this;
 //    console.log("SAVE...");
 //    if (photoTag.id) {
 //      $.ajax({
 //        url: "/api/photos/" + photo.id,
 //        type: "PUT",
 //        data: this,
 //        success: function(resp) {
 //          console.log("SAVE SUCCESS:",resp);
 //          _.extend(thisPhoto, resp);
 //          callback(resp)
 //        },
 //        error: function(resp, err, message) {
 //          console.log("SAVE ERROR", resp, err, message);
 //        }
 //      })
 //    } else {
 //      this.create(callback);
 //    }
 //  };


}

_.extend(PT.PhotoTagging, {
  all: [],

  _events: {},

  //
  // fetchByUserId: function(userId, callback) {
  //   $.ajax({
  //     url: "/api/users/" + userId + "/photos",
  //     type: "GET",
  //     success: function(photosResponse) {
  //       console.log("FETCH SUCCESS", photosResponse);
  //       //assume photosResponse is an array of ....
  //       var userPhotos = [];
  //
  //       _.each(photosResponse, function(photoData) {
  //         var newPhoto = new PT.Photo(photoData);
  //         userPhotos.push(newPhoto);
  //         PT.Photo.all.push(newPhoto);
  //       });
  //
  //       callback(userPhotos);
  //     },
  //     error: function(resp, err, message) {
  //       console.log("FETCH ERROR", resp, err, message);
  //     }
  //   });
  // },
  //
  // fetchByPhotoId: function(photoId) {
  //   var fetchedPhoto = {}
  //   _.each(PT.Photo.all, function(photo) {
  //     if(photo.id == photoId) {
  //       fetchedPhoto = photo;
  //     }
  //   })
  //   return fetchedPhoto;
  // },
  //
  //
  //
  // on: function(eventName, callback) {
  //   //console.log(this);
  //   this._events[eventName] = this._events[eventName] || [];
  //
  //   this._events[eventName].push(callback);
  // },
  //
  // trigger: function(eventName) {
  //   //use fire?
  //   //this.fire(eventName);
  //
  //   _.each(this._events[eventName], function(cb) {
  //     cb();
  //   });
  // },
})