document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    // debugger;
    // ! here event is a SubmitEvent object

    event.preventDefault(); // Prevent the default form submission behavior

    console.log("Form submitted!");
    console.log("Event type:", event.type); // This will log "submit"
  });

  submitButton.addEventListener('click', function(event) {
    // ! here event is a PointerEvent object

    console.log('on button click event:', event);
    console.log('Submit button clicked!');
  });
});
