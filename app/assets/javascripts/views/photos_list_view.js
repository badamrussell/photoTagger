PT.PhotosListView = function() {
  this.$el = $("<div></div");



  this.render = function() {
    this.$el.empty();


    $ul = $("<ul></ul>");
    this.$el.append($ul);

    _.each(PT.Photo.all, function(photo) {
      $ul.append("<li>" + photo.title + "<img src='"+ photo.url+ "'></li>")
    });

    return this;
  };


  PT.Photo.on("add", this.render.bind(this));
}