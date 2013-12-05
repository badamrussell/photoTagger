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

