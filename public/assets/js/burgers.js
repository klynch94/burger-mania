$(function() {
  $(".devour").on("click", function(event) {
    let id = $(this).data("id");
    let current = $(this).data("true");

    let burgerEaten = {
      devoured: current
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerEaten
    }).then(
      function() {
        console.log("changed burger to", current);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      name: $("#newBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
         location.reload();
      }
    );
  });
});
