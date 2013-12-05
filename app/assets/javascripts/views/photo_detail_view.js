PT.PhotoDetailView = function(photo) {
  this.$el = $("<div></div>");
  this.photo = photo;

  this.render = function() {
    //this.$el.empty();
    var $a = $("<a href='#'>back</a>")
    this.$el.prepend($a);
    $a.on("click", function(event) {
      event.preventDefault();
      PT.showPhotosIndex();
    });

    this.$el.append("<p>HELLO</p>");
    console.log(this);
    this.$el.append(JST["photo_detail"]({photo: this.photo}));

    return this;
  };

  this.popTagSelectView = function(event) {
    console.log(">",this.photo)
    var tagBox = new PT.TagSelectView(this.photo, event);
    tagBox.render();
  };

  this.$el.on("click", "img", this.popTagSelectView.bind(this));
}