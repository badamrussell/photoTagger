PT.TagSelectView = function(photo, event) {
  this.$el = $('<div></div>');
  this.photo = photo;

  this.render = function() {
    var thisPhotoTagging = this;
    var $thisEl = this.$el;

    $img = $('.img-wrapper');
    var $tagBox = $('<div class="photo-tag"></div>');
    $tagBox.css("position", "absolute")
    this.x_pos = event.offsetX + $img.position().left - 25;
    this.y_pos = event.offsetY + $img.position().top - 25;
    $tagBox.css("left", event.offsetX + $img.position().left - 25);
    $tagBox.css("top", event.offsetY+ $img.position().top - 25);

    var users = JSON.parse($("#bootstrapped_users_json").html());

    $tagName = $( JST["photo_tag_options"]({users: users}) );

    $tagName.css("position", "absolute");
    //WHY???
    $tagName.css("left", $tagBox.position().left + 50);

    $tagBox.append($tagName);
    $img.append($tagBox);

    $tagName.on("click", "li", function(event) {
      var pTagData = {user_id: $(this).attr("data-id"),
                      x_pos: thisPhotoTagging.x_pos,
                      y_pos: thisPhotoTagging.y_pos,
                      photo_id: thisPhotoTagging.photo.id
                    }

      var newPT = new PT.PhotoTagging(pTagData);
      newPT.create();
      $(this).closest("div.photo-tag").remove();
      //$(this).parent().parent().remove();
    });

    return this;
  }
};