PT.PhotosListView = function() {
  this.$el = $("<div></div>");


  this.render = function() {
    this.$el.empty();


    $ul = $("<ul></ul>");
    this.$el.append($ul);
    //this.$el.on("click", "a", this.showDetail);
    $ul.on("click", "a", this.showDetail);

    _.each(PT.Photo.all, function(photo) {
      $ul.append("<li><a href='#' data-id='" + photo.id + "'>" + photo.title + "</a></li>")

      //$ul.append("<li " + photo.title + "<br><img src='"+ photo.url+ "'></li>")
    });

    return this;
  };

  this.showDetail = function(event) {
    //$(this).attr("id")
    event.preventDefault();
    var showPhoto = PT.Photo.fetchByPhotoId($(this).attr("data-id"));
    PT.showPhotoDetail(showPhoto);
  };

  PT.Photo.on("add", this.render.bind(this));
}