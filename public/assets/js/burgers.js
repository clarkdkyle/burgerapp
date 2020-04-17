// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var neweat = $(this).data("neweat");

    var neweatState = {
      eaten: neweat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: neweatState
    }).then(
      function() {
        console.log("changed eaten to", neweat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var daburg = {
      name: $("#ca").val().trim(),
      eaten: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: daburg
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
});
