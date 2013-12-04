PT.PhotoFormView = function() {
  this.$el = $("<div></div");

  this.render = function() {
    this.$el.empty();

    this.$el.append(JST["photo_form"]());

    //WE CAN'T CALL IT DIRECTLY?
    //$("#add_photo_form").on("submit", this.submit );

    this.$el.find("#add_photo_form").on("submit", this.submit );

    return this;
  };

  this.submit = function(event) {
    event.preventDefault();
    var thisForm = this;
    var formData = $(this).serializeJSON();

    var newPhoto = new PT.Photo(formData.photo)
    newPhoto.create(function(event) {
      //this method is bad because it renders the page the entire time
      //PT.showPhotosIndex();

    });

  }

};