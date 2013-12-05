PT.TagSelectView = function(photo, event) {
  this.$el = $('<div></div>');

  this.render = function() {

    $img = $('.img-wrapper');
    console.log($img.position())
    var $tagBox = $('<div class="photo-tag"></div>');
    $tagBox.css("position", "absolute")
    $tagBox.css("left", event.offsetX + $img.position().left - 25);
    $tagBox.css("top", event.offsetY+ $img.position().top - 25);
    $tagName = $(JST["photo_tag_options"]());
    $tagName.css("position", "absolute");
    //WHY???
    $tagName.css("left", $tagBox.position().left + 50);
    $tagBox.append($tagName);
    $img.append($tagBox);


    return this;
  }

};